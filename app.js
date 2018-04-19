"use strict";
var restify     = require('restify');
var builder     = require('botbuilder');
var data        = require('./respond.json');
var question    = require('./question.json');


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

var msg = server.post('api/messages', connector.listen());

var firebase = require('firebase');
firebase.initializeApp({
    databaseURL: 'https://ksbot-test.firebaseio.com/',
    serviceAccount: 'ksbot-test-dec92a31defe.json', //this is file that I downloaded from Firebase Console
});

var ref = firebase.database().ref();

// ref.on("value", function (snapshot) {
//     data  = snapshot.val();
//     console.log(data[0].key);
// });




bot.dialog('/', function (session) {
//     var firebase    = require('firebase');    
//     firebase.initializeApp({
//         serviceAccount: 'ksbot-test-dec92a31defe.json',
//         databaseURL: 'https://ksbot-test.firebaseio.com/'
//     });
//     var ref = firebase.database().ref();
//     var ez;
//     ref.on("value", function (snapshot) {
//         ez  = snapshot.val();
//     });
    
//     var ans='';
//     for(var i=0; i<ez.length; i++){
//         ans += "\n"+ez[i].key+"\n"+ez[i].link+"\n"+ez[i].comment;
//     }
//     session.send(ans);
    session.send("-------------------------------------------------");
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
        
        
    } else {
        
        var res = 'สวัสดีจ้าา เราคือบอท KunSri'+'\n';
        question.forEach(function(questions,index){
            res += "\n"+questions;
            
        });
        session.send(res);
    }           
           
});


