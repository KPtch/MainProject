
var restify = require('restify');
var builder = require('botbuilder');
var data = require('./respond.json');

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


var res;
bot.dialog('/', function (session) {
    session.send("สวัสดีจ้า");
    session.send(session.message.text);
    session.send(data.คำร้องทั่วไป);
    var req = session.message.text;
    session.send(req);
});




