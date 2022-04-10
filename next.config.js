module.exports = {
  reactStrictMode: true,
  env: {
    SERVER: process.env.SERVER,
    API_URL: process.env.API_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_TAG_MANAGER: process.env.GOOGLE_TAG_MANAGER
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_URL}/:path*`
      }
    ];
  }
};
