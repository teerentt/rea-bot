const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTU2NjczMTcwMjI2Njg4MDkw.YjzpUQ.spUxIlmlGX3LW8vq9v63DYigLgA"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})


client.login(process.env.TOKEN)
