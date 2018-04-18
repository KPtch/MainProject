var restify     = require('restify');
var builder     = require('botbuilder');
var data        = require('./respond.json');
var question    = require('./question.json');
var firebase    = require('firebase');

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function(){
    console.log('%s listening to %s', server.name, server.url);
});

// Setup Bot
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});
var bot = new builder.UniversalBot(connector);


var timeout = undefined;

var msg = server.post('api/messages', connector.listen());


bot.dialog('/', function (session) {
    
//   var admin = require('firebase-admin');
//   var serviceAccount = require('path/to/ksbot-test-dec.json');
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: 'https://ksbot-test.firebaseio.com/'
//   });

//   var data_firebase;
//   var db = admin.database();
//   var ref = db.ref();

//   ref.on("value", function(snapshot) {
//     data_firebase = snapshot.val();
//     session.send(data_firebase[0].key);
      
//   }, function (errorObject) {
//     session.send("The read failed: " + errorObject.code);
//   });  
    //******
    
//     firebase.initializeApp({
//         databaseURL: 'https://ksbot-test.firebaseio.com/',
//         serviceAccount: 'ksbot-test-dec.json', //this is file that I downloaded from Firebase Console
//     });

//     var ref = firebase.database().ref();
//     var data;
//     ref.on("value", function (snapshot) {
//         data  = snapshot.val();
//         session.send(data);
//     });
    
    session.send("hello");
    var req = session.message.text;
    var resKey = null;
    var keys = Object.keys(data);
    for(var i=0; i<keys.length; i++){
        var key = keys[i];
        var regex = new RegExp(key);
        if(req.match(regex)){
            resKey = key;            
            break;
        }
        
    }
    
    if(resKey){
        var s = 'นี้จ้า'+"\n";
        session.send(s+data[resKey]);
//         setTimeout(function(){ session.send(s+data[resKey]) }, 500);
        
        
    } else {
        
        var res = 'สวัสดีจ้าา เราคือบอท KunSri'+'\n';
        question.forEach(function(questions,index){
            res += "\n"+questions;
            
        });
//         setTimeout(function(){ session.send(res) }, 500);
        session.send(res);
    }           
           
});
