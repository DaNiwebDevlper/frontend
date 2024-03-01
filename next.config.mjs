/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Use a regular expression with hostname
        remotePatterns: [
            {
                // Specify the hostname
                hostname: 'res\\.cloudinary\\.com',
            },
        ],
    },

};

export default nextConfig;
