console.log('Astro Platform started!');
var lastMessage = "";
function update() {
  // TODO: Set url
  ajax({ url: 'http://simplyjs.io' }, function(data){
    var message = data.match(/<h1>(.*?)<\/h1>/)[1];
    console.log('Message: ' + message + ' ;Last: ' + lastMessage);
    if (lastMessage != message) {
      lastMessage = message;
      simply.subtitle(message);
      simply.vibe();
    } 
  });
}

simply.on('singleClick', function(e) {
  console.log(util2.format('single clicked $button!', e));
  update();
});

simply.setText({
  title: 'Astro Platform',
  body: 'We are syncing... Please wait...',
}, true);

setInterval(update, 1000);
