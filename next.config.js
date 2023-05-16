/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
}

module.exports = {
  ...nextConfig,
  images: {
    domains: ['act.hoyoverse.com', 'static.wikia.nocookie.net', 'firebasestorage.googleapis.com'],
  },
  async redirects(){
    return [
      {
        source: '/home',
        destination: 'https://akasharift.com',
        permanent: true,
      }
    ]
  },
  compiler: {
    removeConsole: true
  }
}
