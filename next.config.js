/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost", 'lovestack.nyc3.digitaloceanspaces.com'],
  },
  env: {
    GTM_ID: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
  }
};
