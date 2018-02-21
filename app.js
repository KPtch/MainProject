
var restify = require('restify');
var builder = require('botbuilder');
// var handleMessage = require('./handleMessage.js');

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

var data  = {
    "A": "https://goo.gl/MWUi5Y",
    "B" : "https://goo.gl/eikbr8",
    "C": "https://goo.gl/yFcAZQ"};

var res;
bot.dialog('/', function (session) {
    session.send("สวัสดีจ้า");
    session.send(session.message.text);
    var req = session.message.text;
    session.send(req);
//     res = handleMessage(req);
//     session.send(req);
//      session.send(res);
});




