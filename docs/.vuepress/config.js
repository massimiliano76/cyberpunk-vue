module.exports = {
  title: 'Cyberpunk Vue',
  description: 'an dark mode first UI library',
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    defaultTheme: { light: [6, 18], dark: [18, 6] },
    smoothScroll: true,
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      {
        text: '生态',
        items: [
          { text: 'Cyberpunk UI', link: '/#1' },
          { text: 'Cyberpunk React', link: '/#2' }
        ]
      },
      { text: '博客', link: 'https://ylzon.com' },
      { text: 'GitHub', link: 'https://github.com/cyberpunk-ui/cyberpunk-vue' },
    ],
    sidebar: [
      {
        title: '快速上手',   // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/guide/',
          '/guide/get-started',
        ]
      },
      {
        title: '组件(1)',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/components/button'
        ]
      },
    ],
    postcss: {
      plugins: [
        require('css-prefers-color-scheme/postcss'),
        require('autoprefixer')
      ]
    }
  }
}