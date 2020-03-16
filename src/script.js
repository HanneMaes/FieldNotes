/*
  I NOW MADE THIS TO WORK FOR THE SHORTCUTS
  BUT FOR OTHER APPS IT SHOULD JUST DISPLAY MARKDOWN CODE
  SO I WILL PROPABLY HAVE TO REWRITE THIS
*/

function documentReady() {

  // get app data
  var appNotes = getData()
  console.log("appNotes:", appNotes)

  // make HTML
  var html = ''

  // loop trough all articles (apps, desktop, window tiling, ...)
  appNotes.forEach( function(article) {

    var articleTitle = Object.entries(article)[0][0]
    var articleNotes = Object.entries(article)[0][1]

    html += '<article><h2>' + articleTitle + '</h2><li>'

    // loop trough all the shortcuts
    Object.entries(articleNotes).forEach(function(shortcut) {
      
      var shortcutName = shortcut[0]
      var shotcutKeys = shortcut[1]

      // get shortcut for mouse, trackpad & keyboard
      var mouseShortcut = shotcutKeys['mouse']       ? shotcutKeys['mouse']    : ''
      var trackpadShortcut = shotcutKeys['trackpad'] ? shotcutKeys['trackpad'] : ''
      var keyboardShortcut = shotcutKeys['keyboard'] ? shotcutKeys['keyboard'] : ''
      console.log(shortcutName + ': ' + mouseShortcut + trackpadShortcut + keyboardShortcut);

      // create the HTML for mouse, trackpad & keyboard
      var mouseHtml = ''
      var trackpadHtml = ''
      var keyboardHtml = ''

      if(mouseShortcut)     mouseHtml    = '- mouse: ' + mouseShortcut + '<br>'
      if(trackpadShortcut)  trackpadHtml = '- trackpad: ' + trackpadShortcut + '<br>'
      if(keyboardShortcut)  keyboardHtml = '- keyboard: ' + keyboardShortcut + '<br>'

      html += '<ul>' + shortcutName + '<br>' + mouseHtml + trackpadHtml + keyboardHtml + '</ul>'
    });

    // close the article
    html += `
      </li>
    </article>`
  })

  // print HTML
  console.log("html:", html);
  document.getElementById('appNotes').innerHTML = html;
}