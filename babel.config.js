// eslint-disable-next-line func-names
module.exports = function (api) {
  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
  ];
  const plugins = [
    '@babel/plugin-transform-runtime',
    'babel-plugin-react-css-modules',
    'babel-plugin-css-modules-transform',
  ];

  api.cache(false);

  return {
    presets,
    plugins,
  };
};
