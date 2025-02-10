import { Configuration as WebpackConfiguration } from 'webpack';

const nextConfig = {
  webpack(config: WebpackConfiguration) {
    // Customize Webpack here if needed
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,  // Ignores ESLint errors during build
  },
};

export default nextConfig;
