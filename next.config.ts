module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(svg|png|jpg|gif)$/,
      type: 'asset/resource',  // Skips Babel for large files
    }); 
     module.exports = {
    eslint: {
      ignoreDuringBuilds: true,
    },
  };
    return config;
  },

  
};
