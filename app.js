var restify = require('restify');
var builder = require('botbuilder');
// var builder_face = require('botbuilder-facebook');
var data = require('./respond.json');
var question = require('./question.json');
// var question = require('./question.json');

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
    
//     คำถูกต้องกัยคำใกล้เคียง
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
    
//     คำที่เป็นได้หลายใบ
    var resKey1 = null;
//     var keys1 = Object.keys(....json....);
//     for(var i=0; i<keys1.length; i++){
//         var key1 = keys1[i];
//         var regex1 = new RegExp(key1);
//         if(req.match(regex1)){
//             resKey1 = key1;            
//             break;
//         }
        
//     } session.sendTyping()
    
    if(resKey){
        var s = 'นี้จ้า'+"\n";
//         var btn = new builder.HeroCard(session)
//                     .title('เอกสาร')
//                     .buttons([
//                         builder.CardAction.openUrl(session, 'https://www.facebook.com/gl0vep', 'เอกสาร'),
//                         builder.CardAction.openUrl(session, 'https://www.facebook.com/gl0vep', 'คำแนะนำ')
//                     ]);
        
        session.send(s);
//         session.send(s+btn);
//         session.sendTyping(s+btn);
//         session.sendTyping(s);
        
//     } else if(resKey1){
//         var text;
//         switch(resKey1) {
//             case "ใบลา":
//                 text = ;
//             break;
//             case "เทียบโอน":
//                 text = ;
//             break;
//             case "":
//                 text = ;
//             break;
//             default:
//                 text = ;
//         }
//         session.send(text);
        
    } else {
        
        var res = 'สวัสดีจ้าา เราคือบอท KunSri'+'\n';
        question.forEach(function(questions,index){
            res += "\n"+questions;
            
        });
        session.send(res);
    }           
           
});









