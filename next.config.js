module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ns.alsace.team',
                port: '',
                pathname: '/service/images/**',
            },
            {
                protocol: 'https',
                hostname: 'minotar.net',
                port: '',
                pathname: '**',
            },
        ],
    },
}
