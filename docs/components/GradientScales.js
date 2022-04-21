import React from 'react';
import theme from '../../src/theme';

const { gradients } = theme;

const GradientCard = ({ gradient, name }) => {
  const { colors, locations } = gradient;
  const gradientSet = colors.map(
    (color, index) => `${color}${locations?.[index] ? ` ${locations[index] * 100}%` : ''}`
  );
  const linearGradient = `linear-gradient(180deg, ${gradientSet.join(', ')})`;
  console.log({ name, linearGradient });

  return (
    <div>
      <div
        className="h-52 rounded-2xl shadow-2xl shadow-slate-300/60"
        style={{ background: linearGradient }}
      />

      <div className="px-3">
        <small className="text-sm text-gray-500 text-right">{name}</small>
      </div>
    </div>
  );
};
const GradientScales = () => (
  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
    {Object.entries(gradients).map(([gradientName, gradient]) => (
      <GradientCard gradient={gradient} name={gradientName} />
    ))}
  </div>
);

export default GradientScales;
