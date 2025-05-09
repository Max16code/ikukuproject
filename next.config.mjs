/** @type {import('next').NextConfig} */
// import Image from 'next/image';
const nextConfig = {
    images:{
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'images.bing.com',
            port: '',
            pathname: '/**',
    
            },
            {
                protocol: 'https',
                hostname: "i.ytimg.com",
                port: '',
                pathname: '/**',
        
                },
       
                {
                    protocol: 'https',
                    hostname: "blog.logrocket.com",
                    port: '',
                    pathname: '/**',
            
                    },
            ],

    },

    
};

export default nextConfig;
