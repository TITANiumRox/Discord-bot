var Discord = require('discord.js');
const client = new Discord.Client();

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
// Initialize Discord Bot
client.on('ready', () => {
    console.log('I am ready!');
    });


client.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                client.sendMessage({
                    to: channelID,
                    message: 'Pong, suck on my dong!'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});

client.login(process.env.BOT_TOKEN);
