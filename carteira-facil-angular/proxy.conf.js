const PROXY_CONFIG = [
    {
        context: ['/api'],
        target: 'http://192.168.1.9:8080/',
        secure: false,
        logLevel: 'debug'
    }
];

module.exports = PROXY_CONFIG;