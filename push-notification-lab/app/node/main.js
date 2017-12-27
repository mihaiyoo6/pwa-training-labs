/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

const webPush = require('web-push');
const vapidPublicKey = 'BGDLim5sK27kjL9oJbGWPfdeanzRYj4TgRxKllKYcFUQfOghOzFXEjhNqrUXK64Cwmyt5RWuDRIucjszIsKJlKc';
const vapidPrivateKey = 'O1xLQJEHGGlDJ9OSpxVcwvn23cfVrpU6g9GHdrEWBCg';

const pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/duB59Rdq9Ww:APA91bHlgxMKbYNj6Zre-2TQzRR1-XouZjv3e3CFkqwbulpCL-L6ZLfsqWa2hgIjvdPfudW1o4TwdzQTcixK_8IGUeYwj-bUX8assScl-uZ7I7LgBQ1-rYgQZaWDpOvEzWqNHow9i79d",
    "expirationTime": null,
    "keys": {
        "p256dh": "BGZlKrXc9v0hA5H2KCmMgjps8My5Og3jML8c9_uihLZQP8RO6CNesVhGyhqN8RrKGHvysM4sepkCBCVD4xMHY1E=",
        "auth": "PusXdFcS-vxKrewee8boEg=="
    }
};


// TODO 4.3a - include VAPID keys
const payload = 'Here is a payload!2';

const options = {
    //gcmAPIKey: 'AAAA9MXcjKc:APA91bEoz0pIvMdqElXTEx540PPqOK0szk2sFOENsvY28dVJdhPPCxaWpn9cZxJ7QaNGx1FCre_TAmhHiDmcSQ-zkiD7jsE6OvtcrCMxYj0uo_h21HUniv8SYjQVmyNMhjVSNafPu0nE',
    TTL: 60,
    vapidDetails: {
        subject: 'mailto: mijeamihai@yahoo.com',
        publicKey: vapidPublicKey,
        privateKey: vapidPrivateKey
    }
    // TODO 4.3b - add VAPID details

};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
);
