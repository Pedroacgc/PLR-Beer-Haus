export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d1f86096455affc9ff6ffa3',
                  title: 'Sanity Studio',
                  name: 'PLR-Beer-Haus-studio',
                  apiId: 'c4f535d7-f96a-4a8a-9880-230a200309c1'
                },
                {
                  buildHookId: '5d1f8609a4611803e823783e',
                  title: 'Landing pages Website',
                  name: 'PLR-Beer-Haus',
                  apiId: '55594902-eaf8-40fb-8a97-77c2a4c9f0ff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Pedroacgc/PLR-Beer-Haus',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://PLR-Beer-Haus.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
