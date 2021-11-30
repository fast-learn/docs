module.exports = {
  title: '管理后台文档',
  description : '【毕设】管理后台课程配套文档',
  base: '/docs/',
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2, 3] },
    lineNumbers: true
  },
  head: [
    ['link', { rel: 'icon', href: `logo.jpg` }],
    ['meta', { name: 'theme-color', content: '#1890ff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig : {
    nav : [
      { text: '首页', link: '/' },
      { text: '管理后台入门', link: '/learn/' },
      // { text: '管理后台入门', link: '/guide/' },
      { text: '学习课程', link: 'https://ke.qq.com/course/4122203' }
    ],
    navbar: true,
    sidebar: {
      collapsable: false,
      '/guide/': [
        {
          title: '指南',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: '开发',
          collapsable: false,
          children: [
            'init/fast-learn',
            'init/web',
            'init/service',
            'init/guide',
            'init/advanced'
          ]
        },
        {
          title: '联调',
          collapsable: false,
          children: [
            'joint/service'
          ]
        },
        {
          title: '发布',
          collapsable: false,
          children: [
            'release/init',
            'release/complete'
          ]
        },
        {
          title: '预习资料',
          collapsable: false,
          children: [
            'packageAggregate/web',
            'packageAggregate/service'
          ]
        }
      ],
      '/learn/':[
        {
          title: '操作流程',
          collapsable: false,
          children: [
            '',
            '/learn/commissioning.md'
          ]
        },
        {
          title: '权限管理',
          collapsable: false,
          children: [
            'advanced/service',
            'advanced/web'
          ]
        },
        {
          title: 'API文档',
          collapsable: false,
          children: [
            '/learn/API.md',
            '/learn/user.md',
            '/learn/role.md',
            '/learn/menu.md'
          ]
        },
      ]
    }
  }
}
