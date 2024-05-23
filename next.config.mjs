const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: isProd ? '/guilhermeramosht.github.io' : '',
    assetPrefix: isProd ? '/guilhermeramosht.github.io/' : '',
    output: 'export',
};

export default nextConfig;
