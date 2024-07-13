/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'res.cloudinary.com'],
        unoptimized: true, // Disable Image Optimization
    },
    output: "export", 
};

export default nextConfig;
