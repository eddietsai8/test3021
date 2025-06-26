self.addEventListener('push', function (event) {
  const data = event.data ? event.data.json() : {};
  event.waitUntil(
    self.registration.showNotification(data.title || 'í ½í´”', {
      body: data.body || 'æ–°é€šçŸ¥ä¾†äº†',
      icon: '/icon-192.png'
    })
  );
});

