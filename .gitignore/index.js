const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');
var prefix = "-";

client.login("NjA0NjM1ODc0Mzk4OTYxNjY0.XUFu5A.9ItThPpi7RYR-yqt_SVkPB_S1G4");

/*Kick*/
client.on('ready', () => {
  console.log('→ Commande Kick ✔');
});

client.on('message', function (message) {
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === prefix + 'kick') {
      if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("You do not have permission.")
      let member = message.mentions.members.first()
      if (!member) return message.channel.send("Insert an correct user tag, please.")
      if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("You can not kick this player.")
      if (!member.kickable) return message.channel.send("You can not kick this player.")
      member.kick()
      const confirmationkick = new RichEmbed()
          .setTitle('Confirmation')
          .setColor('#cc0099')
          .setDescription('You successfully kicked ' + member.user.username + ' ! :no_entry_sign:');
      message.channel.send(confirmationkick);
      const kicklogs = new RichEmbed()
          .setTitle('Punishment logs')
          .setColor('#cc0099')
          .setDescription(member.user.username + ' has been kicked by ' + message.author);
      member.guild.channels.get('605786648403509282').send(kicklogs)
  }
})

/*Ban*/
client.on('ready', () => {
  console.log('→ Commande Ban ✔');
});

client.on('message', function (message) {
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLocaleLowerCase() === prefix + 'ban') {
     if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("You do not have permission.")
     let member = message.mentions.members.first()
     if (!member) return message.channel.send("Insert an correct user tag, please.")
     if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("You can not ban this player!")
     if (!member.bannable) return message.channel.send("You can not ban this player!")
     message.guild.ban(member, {days: 7})
     const confirmationban = new RichEmbed()
          .setTitle('Confirmation')
          .setColor('#cc0099')
          .setDescription('You successfully banned ' + member.user.username + ' ! :hammer:');
      message.channel.send(confirmationban);
      const banlogs = new RichEmbed()
          .setTitle('Punishment logs')
          .setColor('#cc0099')
          .setDescription(member.user.username + ' has been banned by ' + message.author);
      member.guild.channels.get('605786648403509282').send(banlogs)
  }
})

/*ClearMSG*/
client.on('ready', () => {
  console.log('→ Commande Clear ✔');
});

client.on('message', function (message) {
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)

  if (args[0].toLowerCase() === prefix + "clear") {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("You do not have permission.")
      let count = parseInt(args[1])
      if (!count) return message.channel.send("Please, Insert a number of messages to delete.")
      if (isNaN(count)) return message.channel.send("Please, Insert a correct number.")
      if (count < 1 || count > 99) return message.channel.send("You can only insert a number between 1 and 99.")
      message.channel.bulkDelete(count + 1)
  }
})


client.on('message', function (message) {
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)
  if (args[0].toLowerCase() === prefix + 'guideon') {
    const info = new RichEmbed()
      info.setColor('#cc0099')
      info.setThumbnail(client.user.displayAvatarURL).setTitle("**Guideon Infos**");
      info.setDescription(`Guideon is actually in development. \n Created by: (<@&606061767281344532>) **<@257469636591747072>**`);
      info.addField("**Identity Card**", `**Name:** ${client.user.tag} (${client.user.id})\n**Prefix:** !\n**Version:** 1.0.3\n**Langage:**\n  - Discord: English\n  - Community: French\n**Development:** discord.js\n**IDE:** Microsoft Visual\n**Herberg:** GitHub\n**Commands:**\n  - !ban\n  - !kick\n  - !guideon\n  - !clear\n**Ping:** 2ms`);
      message.channel.bulkDelete(1)
      message.channel.send(info);
     
  }
})


client.on('message', function (message) {
  if (!message.guild) return
  let args = message.content.trim().split(/ +/g)
  if (args[0].toLowerCase() === prefix + 'roles') {
    const roles = new RichEmbed()
      roles.setColor('#cc0099')
      roles.addField("Comete Roles:", `*Groups (8):*\n<@&606061767281344532> <@&608739452348661770> <@&608739220667891732> <@&608739283884310528> <@&608739349726494747> <@&606069260367953921>\n<@&608742806604873748> \n<@&606066077386145801> <@&606066146747220000> <@&606069306383663116> \n<@&608739657521561600> <@&608739721904128001> `);
      message.channel.bulkDelete(1)
      message.channel.send(roles);
     
  }
})
