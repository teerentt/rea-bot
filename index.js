const Discord = require("discord.js")
require("dotenv").config()


const TOKEN = "OTU2NjczMTcwMjI2Njg4MDkw.YjzpUQ.W1aRIpX1biMG1MlCjBZTUYJw_Dg"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})



const welcomeChannelId = "956696047634239548"

client.on("guildMemberAdd", async (member) => {
    member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> Welcome to the server!`)

})




client.login(process.env.TOKEN)
