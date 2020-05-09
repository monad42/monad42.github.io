module.exports = {
    title: 'Melodrama',
    description: 'This is enough internet for me today.',
    plugins: [
        [
            'vuepress-plugin-mathjax',
            {
                target: 'svg',
                macros: {
                    '*': '\\times',
                },
            },
        ],
    ],
    themeConfig: {
        displayAllHeaders: true,
        smoothScroll: true,
        nav: [
            {
                text: 'About', link: '/about/'
            },
            {
                text: 'Posts', link: '/posts/'
            },
            {
                text: 'Links', link: '/links/'
            },

        ]
    }
}