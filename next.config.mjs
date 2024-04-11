/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        POKEMON_API_URL:  process.env.POKEMON_API_URL,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com',
          },
        ],
      },
};

export default nextConfig;
