module.exports = {
    name: 'pick_a_movie',
    description: 'Picks a movie',
    // devOnly: Boolean,
    // testOnly: Boolean,
    // options: Object[],
    // deleted: Boolean
    callback: (client, interaction)=>{
        if(interaction.user.id == process.env.MACS_ID){
            interaction.reply('The Notebook');
        }
        else if(interaction.user.id == process.env.SYDS_ID){
            interaction.reply('La La Land');
        }
        else{
            const movies = [
                'Drive',
                'La La Land',
                'The Nice Guys',
                'Half Nelson',
                'The Big Short',
                'Barbie',
                'Blade Runner 2049',
                'First Man',
                'Blue Valentine',
                'The Ides of March',
                'The Believer',
                'The Fall Guy',
                'Lars and the Real Girl',
                'Crazy, Stupid, Love',
                'The Place Beyond the Pines',
                'Fracture',
                'The Slaughter Rule',
                'Remeber the Titans',
                'The Notebook',
                'Song to Song',
                'Only God Forgives',
                'All Good Things',
                'The United States of Leland',
                'Gangster Squad',
                'Murder by Numbers',
                'Stay'
            ];
            interaction.reply(movies[Math.floor(Math.random()*movies.length)]);
        }
    }
}