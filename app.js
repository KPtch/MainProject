
var restify = require('restify');
var builder = require('botbuilder');


var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function(){
    console.log('%s listening to %s', server.name, server.url);
});

// Setup Bot
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});
// var bot = new builder.UniversalBot(connector);

// var bot = new builder.UniversalBot(connector, function(session){
    
//     var token = tokens[session.userId];
//     //How do I get the user Id here?
//     if(token == undefined){
//         session.beginDialog('login');
//     } else {
//         session.userData.token = token;
//         session.send("How can I help you?");
//         session.send(token);
//     }

// });


var msg = server.post('api/messages', connector.listen());
var token = tokens[session.userId];
bot.dialog('/', function (session) {
    session.send("สวัสดีจ้า");
    session.send(msg);
    session.send(token);

});



