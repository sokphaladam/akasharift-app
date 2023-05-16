/** @type {import('next').NextConfig} */
const nextConfig = {
  rswcMinify: true
}

const withPWA = require('next-pwa')({
  dest: 'public',
  mode: process.env.NODE_ENV,
  disable: process.env.NODE_ENV === 'development',
  cacheOnFrontEndNav: true
});

module.exports = withPWA({
  swcMinify: true,
  images: {
    domains: ['act.hoyoverse.com', 'static.wikia.nocookie.net', 'firebasestorage.googleapis.com'],
  },
  output: 'standalone'
})