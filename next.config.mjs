const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: isProd ? '/rebecca' : '',
    assetPrefix: isProd ? '/rebecca/' : '',
    output: 'export',
};

export default nextConfig;
