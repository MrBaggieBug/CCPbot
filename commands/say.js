module.exports = {
    name: 'say',
    description: 'says what you input!',
    cooldown: 5,
    async execute(message, args){
        message.channel.send(args.join(" "))
        message.delete()
}};