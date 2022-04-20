import React from 'react';
import Callout from 'nextra-theme-docs/callout';
import metadata from '../metadata.json';

const PropsTable = ({ of = '' }) => {
  const displayName = of;
  const component = metadata.find(node => node.name === displayName);

  if (!component) {
    console.error(`Could not find component ${displayName}`);
    return (
      <>
        <h3>{displayName}</h3>
        <Callout>Component not found</Callout>
      </>
    );
  }

  return (
    <>
      <h3>{component.name}</h3>
      {component.props.length > 0 ? (
        <table className="block w-full overflow-x-auto">
          <thead>
            <tr>
              <th align="left">Prop</th>
              <th align="left">Type</th>
              <th align="left">Default</th>
              <th align="left">Description</th>
            </tr>
          </thead>
          <tbody>
            {component.props.map(prop => (
              <tr key={prop.name}>
                <td className="whitespace-nowrap">
                  <code>{prop.name}</code>{' '}
                  {prop.required ? <span className="align-text-top">Required</span> : null}
                </td>
                <td>
                  <code>{prop.type}</code>
                </td>
                <td>{prop.defaultValue ? <code>{prop.defaultValue}</code> : '–'}</td>
                <td>{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No props</p>
      )}
    </>
  );
};

export default PropsTable;
