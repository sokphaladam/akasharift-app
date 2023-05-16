/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig,
  images: {
    domains: ['act.hoyoverse.com', 'static.wikia.nocookie.net', 'firebasestorage.googleapis.com'],
  },
}