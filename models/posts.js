module.exports = class Posts
{
    static getAll() {
        return [
            {
                index: 1,
                title: 'Это первое сообщение',
                text: 'Lorem ipsum fghfehjrhejdhj erheryjeykjrtukrtyu'
            },
            {
                index: 2,
                title: 'Это второе сообщение',
                text: 'Lorem ipsum fghfehjrhejdhj erheryjeykjrtukrtyu'
            },
            {
                index: 3,
                title: 'Это третье сообщение',
                text: 'Lorem ipsum fghfehjrhejdhj erheryjeykjrtukrtyu'
            },
            {
                index: 4,
                title: 'Это четвертое сообщение',
                text: 'Lorem ipsum fghfehjrhejdhj erheryjeykjrtukrtyu'
            }
        ]
    }
}