console.log('Astro Platform started!');
var lastMessage = "";
function update() {
  ajax({ url: 'http://79.124.67.13:8080/activities/last' }, function(data){
    var message = data;
    // console.log('Message: ' + message + ' ;Last: ' + lastMessage);
    if (lastMessage != message) {
      lastMessage = message;
      simply.subtitle("");
      simply.body(message);
      simply.vibe();
    }
  });
}

simply.on('singleClick', function(e) {
  update();
});

simply.setText({
  title: 'AstroPlatform',
  subtitle: 'We are syncing... Please wait...',
}, true);

setInterval(update, 1500);