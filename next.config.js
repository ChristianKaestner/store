const path = require('path');

module.exports = {
  webpack: config => {
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'smokey-s3.s3.eu-central-1.amazonaws.com',
        port: '',
        pathname: '/products/**',
      },
    ],
  },
};
