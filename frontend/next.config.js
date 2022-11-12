/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_API_URL: "http://runtimeterrorsbackend.herokuapp.com"
  }
}

module.exports = nextConfig
