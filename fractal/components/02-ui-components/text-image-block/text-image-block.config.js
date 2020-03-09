module.exports = {
    default: 'Text-image left',
    media: true,
    context: {
        position: 'left',
        media:true
    },
    variants: [
        {
            name: 'Text-image right',
            context: {
                position: 'right'
            }
        },
        {
            name: 'Text-image no image',
            context: {
                media:false
            }
        }
    ]
};
  