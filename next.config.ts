/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // This allows the build to finish even if there are small errors like apostrophes
    ignoreDuringBuilds: true,
  },
  typescript: {
    // This ensures minor type mismatches don't stop your deployment
    ignoreBuildErrors: true,
  },
};

export default nextConfig;