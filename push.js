var push = require('web-push');

//let vapidkeys=push.generateVAPIDKeys();
let vapidkeys={
    publicKey: 'BA7lcSD_RVXx0Q6kdH0zyZ9BEq9wtistiQj-15KePUIwGOGJcO9BWilP4wxUlQm74muVUmby8mBnQ7zLREs1zZY',
    privateKey: 'L5jaTmCP4vmYTqTH2q77a_ZlnQUnDTw-1nnIiAeLZx4'
  };

  push.setVapidDetails('mailto:tejpal@cputs.ca',vapidkeys.publicKey,vapidkeys.privateKey);

  let sub={};
  push.sendNotification(sub,'test Message');