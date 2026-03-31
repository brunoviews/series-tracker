module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./'],
                    alias: {
                        '@': './src',
                        '@assets': './assets',
                        '@components': './src/components',
                        '@theme': './src/theme',
                        '@navigation': './src/navigation',
                        '@views': './src/views',
                        '@context': './src/context',
                        '@lib': './src/lib',
                        '@i18n': './src/i18n',
                        '@types': './src/types',
                    },
                },
            ],
        ],
    };
};
