/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.wcbackoffice.com',
        port: '',
        pathname: '/winchile/providers/**'
      }
    ]
  }
}

module.exports = nextConfig
