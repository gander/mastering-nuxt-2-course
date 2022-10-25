export default {
    components: true,
    head: {
        titleTemplate: 'Mastering Nuxt: %s',
        htmlAttrs: {
            lang: 'en',
        },
        bodyAttrs: {
            class: ['main'],
        },
        meta: [{
            charset: 'utf-8',
        }],
    },
    router: {
        prefetchLinks: false,
    },
    plugins: [
        '~/plugins/maps.client',
        '~/plugins/dataApi',
    ],
};
