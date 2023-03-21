/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  output: 'export', 
}

module.exports = {nextConfig, images: {
  unoptimized: true
}}
