/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URI: 'mongodb+srv://heisabdallah:warhaz@rola.oe0ji33.mongodb.net/Authentication',
    AUTH_SECRET: 'szdbqjndksko'
  },
}

module.exports = nextConfig
