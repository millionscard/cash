const { readFile, writeFile } = require('fs/promises');
const docgen = require('react-docgen');
const globby = require('globby');

(async () => {
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

  // Write to file
  const componentJsonArray = JSON.stringify(components, null, 2);
  await writeFile('./metadata.json', componentJsonArray, 'utf8');

  console.log({ components });
})();
