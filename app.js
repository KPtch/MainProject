
var restify = require('restify');
var builder = require('botbuilder');
// var respond = require('./respond');

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
var inTimeout= {};
var msg = server.post('api/messages', connector.listen());

var data  = {
    "A": "https://goo.gl/MWUi5Y",
    "B" : "https://goo.gl/eikbr8",
    "C": "https://goo.gl/yFcAZQ"};


bot.dialog('/', function (session) {
    session.send("สวัสดีจ้า");
    session.send(session.message.text);
    session.send('-----------------');
//     session.send(session.threadID);
// //     session.send(session.userid);
//     session.send(session.user_id);
//     session.send(session.user.id);
    session.send(session);
    session.send(session.message.id);
    session.send(session.message.threadID);
    session.send('-----------------');
    
    if(session.message.text == "คำร้องทั่วไป"){
        session.send("นี้จร้า ^^");
        session.send(data.A);
     }
    
});




