function getData() {
  return [

    { // article: coding
      'coding': {
        'Multi cursor': 'alt-click',
        'Multi cursor': 'ctrl-shift-up/down',
        'Undo cursor position (lin)': 'ctrl-shift-back (for min)',
        'Undo cursor position (win)': 'alt-back ',
        'Remove line': 'ctrl-shift-k',
      },
    },

    { // article: emmet
      'emmet': {
        'html': {
          '# id': 'div#id.class1.class2',
          '> child': 'ul>li',
          '+ sibling': 'h1+p',
          '* multiply': 'ul>li*5',
          '$* item numbering': 'ul>li$*5',
          '{} item numbering': 'a{Click me}',
        },
        'css': {
          'm': '10 -> margin: 10px;',
        }
      },
    },

  ] // return
} // function getData()