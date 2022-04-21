import React from 'react';
import theme from '../../src/theme';

const { colors } = theme;
const { transparent, ...filteredColors } = colors;

const ColorCard = ({ color, name }) => (
  <div
    className="flex flex-col justify-end h-52 rounded-2xl shadow-2xl shadow-slate-300/60 overflow-hidden"
    style={{ background: color }}
  >
    <div className="py-1 px-3">
      <span className={`text-xl font-bold text-${getContrast(color)}`}>{name}</span>
    </div>
    <div className="py-2 px-3 bg-white">
      <small className="text-sm text-gray-500">{color}</small>
    </div>
  </div>
);

const ColorScales = () => (
  <div className="grid gap-6 mt-10">
    {Object.entries(filteredColors).map(([scaleName, scale]) =>
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

function getContrast(hexColor) {
  const [r, g, b] = hexToRGB(hexColor);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? 'black' : 'white';
}

function hexToRGB(hexColor) {
  let r = 0,
    g = 0,
    b = 0;
  if (hexColor.length === 4) {
    r = '0x' + hexColor[1] + hexColor[1];
    g = '0x' + hexColor[2] + hexColor[2];
    b = '0x' + hexColor[3] + hexColor[3];
  } else if (hexColor.length === 7) {
    r = '0x' + hexColor[1] + hexColor[2];
    g = '0x' + hexColor[3] + hexColor[4];
    b = '0x' + hexColor[5] + hexColor[6];
  }
  return [r, g, b];
}

export default ColorScales;
