jsconst Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: ' :) ',
     details:`, هاي `,
     url: 'http://twitch.tv/Streammingg',
     state: `تحت الكلام جمب الصوره.`,
    application_id: '281376075802476544',
     assets: {
        small_image: `431886883216293899.`,
        small_text: ' الكلام الي تبيه يطلع ع الصور ع ( الصغيره ) يعني يوم احد يضغط عليها ' ,
        large_image: `ID الصوره الكبيره`,
        large_text: `الكلام الي تبيه يطلع ع الصور ع ( الكبيره ) يعني يوم احد يضغط عليها.` }

  }
    });
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
