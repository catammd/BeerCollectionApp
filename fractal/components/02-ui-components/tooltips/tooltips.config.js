module.exports = {
    default: 'tooltip-left',
    context: {
        position: 'left'
    },
    variants: [
        {
            name: 'tooltip-up',
            context: {
                position: 'up'
            }
        },
        {
            name: 'tooltip-bottom',
            context: {
                position: 'down'
            }
        },
        {
            name: 'tooltip-right',
            context: {
                position: 'right'
            }
        },
    
    ]
};
