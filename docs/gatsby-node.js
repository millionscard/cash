const { readFile } = require('fs/promises');
const docgen = require('react-docgen');
const globby = require('globby');

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  // Extract compontent metadata from source files
  const files = globby.sync(['../src/**/*.js'], { absolute: true });
  const fileContents = await Promise.all(files.map(filePath => readFile(filePath)));
  const data = fileContents
    .map(source => {
      try {
        return docgen.parse(source);
      } catch {
        return null;
      }
    })
    .filter(Boolean);
  const components = data.map(component => {
    return {
      name: component.displayName,
      description: component.description,
      methods: component.methods,
      props: component.props
        ? Object.keys(component.props)
            .map(key => {
              const prop = component.props[key];
              return {
                name: key,
                description: prop.description,
                defaultValue: prop.defaultValue ? prop.defaultValue?.value : '',
                required: prop.required,
                type: prop.type?.name,
              };
            })
            // Move required props to beginning of the list
            .sort((a, b) => {
              if (a.required && !b.required) {
                return -1;
              }
              if (!a.required && b.required) {
                return 1;
              }
              return 0;
            })
        : [],
    };
  });

  // Add component metadata to GraphQL API
  for (const component of components) {
    const nodeContent = JSON.stringify(component);
    const nodeMeta = {
      id: createNodeId(component.name),
      parent: null,
      children: [],
      internal: {
        type: 'ComponentMetadata',
        mediaType: 'text/html',
        content: nodeContent,
        contentDigest: createContentDigest(component),
      },
    };
    const node = Object.assign({}, component, nodeMeta);
    createNode(node);
  }
};
