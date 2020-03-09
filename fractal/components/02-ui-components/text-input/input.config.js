module.exports = {
    context: {
        name: 'Input field box',
        isRequired: false,
        label: true
    },
    variants: [
        {
            name: 'Required',
            context: {
                isRequired: true
            }
        },
        {
            name: 'No label',
            context: {
                label: false
            }
        }
    ]
};
