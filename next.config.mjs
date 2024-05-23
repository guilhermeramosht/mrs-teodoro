const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: isProd ? '/your-repo-name' : '',
    assetPrefix: isProd ? '/your-repo-name/' : '',
    output: 'export',
};

export default nextConfig;
