self.addEventListener('push', function (event) {
  const data = event.data ? event.data.json() : {};
  event.waitUntil(
    self.registration.showNotification(data.title || '��', {
      body: data.body || '新通知來了',
      icon: '/icon-192.png'
    })
  );
});

