function getData() {
  return [

    { // article: apps
      'apps': {
        'alfred': {
          'keyboard': 'cmd + space',
        },
        'launchpad': {
          'trackpad': '4 finger pinge',
        },
      },
    },

    { // article: desktop
      'desktop': {
        'switch desktop': {
          'mouse': 'side buttons',
          'trackpad': '4 finger left, right',
        },
        'mission control': {
          'mouse': 'bottom right hotcorner',
          'trackpad': '4 finger up',
        },
      },
    },

    { // article: window tiling
      'window tiling': {
        'tile window': {
          'mouse': 'move window to side/corner',
        },
        'center': {
          'keyboard': 'alt + down'
        },
        'fullscreen': {
          'keyboard': 'alt + up',
        },
        'right/left half': {
          'keyboard': 'alt + right/left',
        },
      },
    },

  ] // return
} // function getData()