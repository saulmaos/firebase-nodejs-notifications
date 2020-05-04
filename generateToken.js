const { google } = require('googleapis');
const MESSAGING_SCOPE = 'https://www.googleapis.com/auth/firebase.messaging';
const SCOPES = [MESSAGING_SCOPE];

module.exports = { getAccessToken }

// to get The AccessToken to be able to send notifications via HTTP v1 from Postman
function getAccessToken() {
    return new Promise(function(resolve, reject) {
        var key = require(__dirname + '/keys/fir-demo-289c7-firebase-adminsdk-a6ogc-e03b9033b8.json');
        var jwtClient = new google.auth.JWT(
            key.client_email,
            null,
            key.private_key,
            SCOPES,
            null
        );
        jwtClient.authorize(function(err, tokens) {
            if (err) {
                reject(err);
                return;
            }
            resolve(tokens.access_token);
        });
    });
}