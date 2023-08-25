var push = require('web-push');

//let vapidkeys=push.generateVAPIDKeys();
let vapidkeys = {
  publicKey: 'BA7lcSD_RVXx0Q6kdH0zyZ9BEq9wtistiQj-15KePUIwGOGJcO9BWilP4wxUlQm74muVUmby8mBnQ7zLREs1zZY',
  privateKey: 'L5jaTmCP4vmYTqTH2q77a_ZlnQUnDTw-1nnIiAeLZx4'
};

push.setVapidDetails('mailto:tejpal@cputs.ca', vapidkeys.publicKey, vapidkeys.privateKey);

let sub = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/c2J4c-0rK0c:APA91bFOAiQwYMLTC8Qo8ROBwpBx1HHkfICD4lz_aQQdMw97BdMdzfsjyHTE7HntPgEh7zZwSo6nJoVb3BjKi_zg2BZRp9QM6OZqh2mfgPUZDbN7PJDHxjplJ4xICU8F4DI0-KF_cWVP",
  "expirationTime": null,
  "keys": {
    "p256dh": "BIMe94-c5i3530oGsxWPlILlItlMHyWm7-nGJtQrrxOjDTRr2TVQKYfjsw77-9o14ccEhYqcEx3uKKm6OyNrmtE",
    "auth": "OlL5JqS0pVyB6GTty1RxFQ"
  }
};
push.sendNotification(sub, 'test Message');