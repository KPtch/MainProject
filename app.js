
var restify = require('restify');
var builder = require('botbuilder');
// var respond = require('./respond');

var x = "{
    "คำร้องทั่วไป": "https://reg.src.ku.ac.th/student/news/kamrong/1%20%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%97%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B9%84%E0%B8%9B.pdf",
    "คำร้องขอเอกสารทางการศึกษา" : "https://reg.src.ku.ac.th/student/news/kamrong/%E0%B8%82%E0%B8%AD%E0%B9%80%E0%B8%AD%E0%B8%81%E0%B8%AA%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2-new%20(1).pdf",
    "คำร้องขอผ่อนผัน": "https://reg.src.ku.ac.th/student/news/kamrong/3%20%E0%B8%82%E0%B8%AD%E0%B8%9C%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%9C%E0%B8%B1%E0%B8%99(%E0%B9%81%E0%B8%81%E0%B9%89%E0%B9%84%E0%B8%82).pdf",
    "คำร้องของดเรียนเหลือต่ำกว่า9หน่วย": "https://reg.src.ku.ac.th/student/news/kamrong/4%20%E0%B8%84%E0%B8%B3%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%94%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%95%E0%B9%88%E0%B8%B3%E0%B8%81%E0%B8%A7%E0%B9%88%E0%B8%B2%209%20%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%A7%E0%B8%A2.pdf",
    "ขอเรียนต่ำกว่า9หน่วยปีสุดท้าย": "https://reg.src.ku.ac.th/student/news/kamrong/5%20%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%95%E0%B9%88%E0%B8%B3%E0%B8%81%E0%B8%A7%E0%B9%88%E0%B8%B2%209%20%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%A7%E0%B8%A2(%E0%B8%9B%E0%B8%B5%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%A2).pdf",}";

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

bot.dialog('/', function (session) {
    session.send("สวัสดีจ้า");
     session.send(JSON.parse(x));
//     if(session.message.text == "เอกสารดรอป"){
//        session.send("y");
        
//      }
    
});




