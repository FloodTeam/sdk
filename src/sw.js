importScripts("workbox-v4.3.1/workbox-sw.js");
importScripts("https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyD5dzUNlXR1b7oFj523utB_eZymWX3X0wY",
  authDomain: "ftms-ca85b.firebaseapp.com",
  databaseURL: "https://ftms-ca85b.firebaseio.com",
  projectId: "ftms-ca85b",
  storageBucket: "ftms-ca85b.appspot.com",
  messagingSenderId: "26422956124",
  appId: "1:26422956124:web:5102d14c30573ff2",
});

const messaging = firebase.messaging();

self.addEventListener("message", ({ data }) => {
  if (data === "skipWaiting") {
    self.skipWaiting();
  }
});

self.addEventListener("notificationclick", function (event) {
  if (event.action === "open") {
    event.waitUntil(
      clients
        .matchAll({
          type: "window",
        })
        .then(function (clientList) {
          for (var i = 0; i < clientList.length; i++) {
            var client = clientList[i];
            if (
              client.url == event?.notification?.data?.FCM_MSG?.data?.url &&
              "focus" in client
            ) {
              return client.focus();
            }
          }
          if (clients.openWindow)
            return clients.openWindow(event.notification.data.FCM_MSG.data.url);
        })
    );
  }

  event.notification.close();
});

self.workbox.precaching.precacheAndRoute([]);
