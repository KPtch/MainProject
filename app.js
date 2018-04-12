
var restify = require('restify');
var builder = require('botbuilder');
var data = require('./respond.json');
var question = require('./question.json');

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
        var btn = {
            "attachment":{
              "type":"template",
              "payload":{
                "template_type":"generic",
                "text":"ต้องการเอกสารนี้ไหม?",
                "buttons":[
                  {
                    "type":"web_url",
                    "url":"https://medium.com/@iamcmnut/howto-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-facebook-chatbot-%E0%B9%80%E0%B8%9A%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%95%E0%B9%89%E0%B8%99-%E0%B9%81%E0%B8%9A%E0%B8%9A-step-by-step-6b3d4ab6f714",
                    "title":"ใบลา"
                    
                  },
                  {
                    "type":"web_url",
                    "url":"https://medium.com/@iamcmnut/howto-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87-facebook-chatbot-%E0%B9%80%E0%B8%9A%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B8%95%E0%B9%89%E0%B8%99-%E0%B9%81%E0%B8%9A%E0%B8%9A-step-by-step-6b3d4ab6f714",
                    "title":"คำแนะนำ"
                  }
                  
                ]
              }
            }
          
        
    }
        session.send(s+btn);
        
    } else {
        
        var res = 'สวัสดีจ้าา เราคือบอท KunSri'+'\n';
        question.forEach(function(questions,index){
            res += "\n"+questions;
            
        });
        session.send(res);
    }           
           
});




