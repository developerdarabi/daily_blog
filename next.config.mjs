/** @type {import('next').NextConfig} */
const nextConfig = {
    serverRuntimeConfig: {
        dbConfig: {
            host: 'localhost',
            port: 3306,
            user: 'mojtaba',
            password: 'mysql12345678910',
            database: 'daily_blog'
        },
    },
    env: {
        API_BASE_URL: process.env.API_BASE_URL
    }
};

export default nextConfig;
