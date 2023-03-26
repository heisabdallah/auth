/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URI: 'mongodb://localhost:27017/jwt',
    AUTH_SECRET: 'szdbqjndksko'
  },
}

module.exports = nextConfig
