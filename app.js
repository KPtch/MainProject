var restify = require('restify');
var builder = require('botbuilder');
var data = require('./respond.json');
var question = require('./question.json');

// ----------- fire base ---------------

// var firebase = require('firebase');
// firebase.initializeApp({
//     databaseURL: 'https://ksbot-test.firebaseio.com/',
//     serviceAccount: 'ksbot-test-dec.json', //this is file that I downloaded from Firebase Console
// });
// var data_firebase;
// var ref = firebase.database().ref();

// ----------------------------------
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
//     ref.on("value", function (snapshot) {
//         data_firebase  = snapshot.val();

//     });
    session.send("hello");
    session.send(data_firebase);
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
