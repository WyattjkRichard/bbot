
const { devs, testServer } = require('../../../config.json');
const getLocalCommands = require('../../utils/getLocalCommands');
const { permissionsRequired } = require('../../commands/moderation/ban');

module.exports = async (client, interaction) => {

    if(!interaction.isChatInputCommand) return;

    const localCommands = getLocalCommands();

    try {
        const commandObject = localCommands.find((cmd)=>cmd.name === interaction.commandName);

        if(!commandObject) return;

        if(commandObject.devOnly){
            if(!devs.includes(interaction.member.id)){
                interaction.reply({
                    content: 'Only devs can run this command',
                    ephemeral: true,
                });
                return;
            }
        }

        if(commandObject.testOnly){
            if(!(interaction.guild.id === testServer)){
                interaction.reply({
                    content: 'This command can only be run in the test server',
                    ephemeral: true,
                });
                return;
            }
        }

        if(commandObject.permissionsRequired?.length){
            for(const permission of commandObject.permissionsRequired){
                if(!interaction.member.permissions.has(permission)){
                    interaction.reply({
                        content: 'Invalid permissions',
                        ephemeral: true,
                    });
                    break;
                }
            }
        }

        if(commandObject.botPermissions?.length){
            for(const permission of commandObject.botPermissions){
                const bot = interaction.guild.members.me;
                if(!bot.permissions.has(permission)){
                    interaction.reply({
                        content: 'Bot does not have the correct permissions',
                        ephemeral: true,
                    });
                    break;
                }
            }
        }

        await commandObject.callback(client, interaction);

    } catch (error) {
        console.log(`there was an error: ${error}`);
    }


};