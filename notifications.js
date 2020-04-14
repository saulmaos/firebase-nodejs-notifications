const admin = require("firebase-admin");

function initFirebase() {
    const serviceAccount = require(__dirname + '/keys/fir-demo-289c7-firebase-adminsdk-a6ogc-e03b9033b8.json');
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
    });
}

initFirebase();

function sendPushToOneUser(notification) {
    const message = {
        token: notification.tokenId,
        data: {
            titulo: notification.titulo,
            mensaje: notification.mensaje
        }
    }
    sendMessage(message);
}

function sendPushToTopic(notification) {
    const message = {
        topic: notification.topic,
        data: {
            titulo: notification.titulo,
            mensaje: notification.mensaje
        }
    }
    sendMessage(message);
}

module.exports = { sendPushToOneUser, sendPushToTopic }

function sendMessage(message) {
    admin.messaging().send(message)
        .then((response) => {
            // Response is a message ID string.
            console.log('Successfully sent message:', response);
        })
        .catch((error) => {
            console.log('Error sending message:', error);
        })
}