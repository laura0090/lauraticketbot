const Discord = require('discord.js');
let ayarlar = require("../ayarlar.json")

exports.run = function(client, message) {
  const surfacetepkı = client.emojis.cache.find(emoji => emoji.id === "847513354612375572")
const embed = new Discord.MessageEmbed()
.setColor('BLACK')
.setTitle('<a:hype:847379341234143262> Łαurα Youtube Ticket Komutları')
.setTimestamp()
.setDescription(`Kullanıldığım Dil :flag_tr:`)
.addField(`<a:hype:847379341234143262> ${ayarlar.prefix}bilet-aç`, `Bilet kanalı açarsınız.`)
.addField(`<a:hype:847379341234143262> ${ayarlar.prefix}bilet-kapat`, `Bilet kanalını kapatırsınız.`)
.addField(`<a:hype:847379341234143262> ${ayarlar.prefix}bilet-ekle`, `Bilet kanalına birini eklersiniz.`)
.addField(`<a:hype:847379341234143262> ${ayarlar.prefix}bilet-gönder`,`Bilet kanalına bilet gönderir.`)
.addField(`<a:hype:847379341234143262> ${ayarlar.prefix}bilet-kanal`,`Bilet kanalını ayarlar.`)
.setImage('')
.setFooter('Łαurα Youtube', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
message.react(surfacetepkı)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['bilet-yardım'], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
}; 