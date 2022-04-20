import React from 'react';
import theme from '../../src/theme';

const { colors } = theme;

const ColorCard = ({ color, name }) => (
  <div
    className="flex flex-col justify-end h-48 rounded-2xl shadow-xl shadow-slate-300/60 overflow-hidden"
    style={{ background: color }}
  >
    <div className="py-1 px-4">
      <span className="text-xl font-bold">{name}</span>
    </div>
    <div className="p-4 bg-white">
      <small className="text-sm text-gray-500">{color}</small>
    </div>
  </div>
);

const ColorScales = () => (
  <div className="grid gap-6">
    {Object.entries(colors).map(([scaleName, scale]) =>
      typeof scale === 'object' ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.entries(scale).map(([colorName, colorValue], index) => (
            <ColorCard key={index} color={colorValue} name={`${scaleName}.${colorName}`} />
          ))}
        </div>
      ) : (
        <ColorCard color={scale} name={scaleName} />
      )
    )}
  </div>
);

export default ColorScales;
