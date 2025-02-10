import { Configuration as WebpackConfiguration } from 'webpack';

module.exports = {
  webpack(config: WebpackConfiguration) {

     module.exports = {
    eslint: {
      ignoreDuringBuilds: true,
    },
  };
    return config;
  },

  
};
