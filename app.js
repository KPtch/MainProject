
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

var myObj  = {
    "คำร้องทั่วไป": "https://goo.gl/MWUi5Y",
    "คำร้องขอเอกสารทางการศึกษา" : "https://goo.gl/eikbr8",
    "คำร้องขอผ่อนผัน": "https://goo.gl/yFcAZQ"};

var myJSON = JSON.stringify(myObj);

var msg = server.post('api/messages', connector.listen());

bot.dialog('/', function (session) {
    session.send("สวัสดีจ้า");
    session.send(myJSON);
//     if(session.message.text == "เอกสารดรอป"){
//        session.send("y");
        
//      }
    
});




