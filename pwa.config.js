export const pwaManifest = {
    registerType:'prompt',
    includeAssests:['bobs-brain-box.ico', "apple-touc-icon.png", "masked-icon.svg"],
    manifest:{
      name:"Bobs Brain Box",
      short_name:"BBB",
      description:"Bobs Brainbox of quizzes, expand your mind!",
      icons:[{
        src: '/bobs-brain-box.ico',
        sizes:'192x192',
        type:'image/png',
        purpose:'favicon'
      },
      {
        src:'/bobs-brain-box.ico',
        sizes:'512x512',
        type:'image/png',
        purpose:'favicon'
      },
      {
        src: '/bobs-brain-box.ico',
        sizes:'180x180',
        type:'image/png',
        purpose:'apple touch icon',
      },
      {
        src: '/bobs-brain-box.ico',
        sizes:'512x512',
        type:'image/png',
        purpose:'any maskable',
      }
    ],
    theme_color:'#171717',
    background_color:'#f0e7db',
    display:"standalone",
    scope:'/',
    start_url:"/quiz",
    orientation:'portrait'
    }
  }