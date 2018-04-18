var firebase = require('firebase');
firebase.initializeApp({
    databaseURL: 'https://ksbot-test.firebaseio.com/',
    serviceAccount: 'ksbot-test-dec.json', //this is file that I downloaded from Firebase Console
});
