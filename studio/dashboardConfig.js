export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62a01254de9e4b1f08839bdf',
                  title: 'Sanity Studio',
                  name: 'maoge-studio',
                  apiId: 'db8df11c-a0f2-4885-970d-fbda48966b41'
                },
                {
                  buildHookId: '62a0125472b8121f2759a401',
                  title: 'Landing pages Website',
                  name: 'maoge',
                  apiId: '4441fb03-b99d-4655-b68a-7d150c3336d2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yangchanglong2022/maoge',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://maoge.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
