const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/guilhermeramosht.github.io',
    assetPrefix: '/guilhermeramosht.github.io/',
    output: "export",
};

export default nextConfig;
