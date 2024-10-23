module.exports = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ns.alsace.team',
                port: '443',
                pathname: '/service/images/**',
            },
            {
                protocol: 'https',
                hostname: 'minotar.net',
                port: '443',
                pathname: '/**',
            },
        ],
    },
}
