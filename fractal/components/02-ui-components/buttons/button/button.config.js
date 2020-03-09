module.exports = {
    default: 'primary',
    variants: [
        {
            name: 'primary',
            label: 'Primary',
            context: {
                modifier: 'primary',
                text: 'Primary'
            }
        },
        {
            name: 'secondary',
            label: 'Secondary',
            context: {
                modifier: 'secondary',
                text: 'Secondary'
            }
        },
        {
            name: 'ghost',
            label: 'Ghost',
            context: {
                modifier: 'ghost',
                text: 'Ghost'
            }
        },
        {
            name: 'icon-primary',
            label: 'Icon button primary',
            context: {
                modifier: 'primary',
                text: 'Icon button',
                icon: 'house',
                iconSize: 'm'
            }
        },
        {
            name: 'icon-secondary',
            label: 'Icon button secondary',
            context: {
                modifier: 'secondary',
                text: 'Icon button',
                icon: 'filter-1',
                iconSize: 'm'
            }
        },
        {
            name: 'linkbutton',
            label: 'Link button - primary',
            context: {
                modifier: 'primary',
                text: 'Link button primary',
                linkButton: true,
                href: 'http://creuna.com'
            }
        },
        {
            name: 'linkbutton-secondary',
            label: 'Link button - secondary',
            context: {
                modifier: 'secondary',
                text: 'Link button secondary',
                linkButton: true,
                href: 'http://creuna.com'
            }
        },
        {
            name: 'disabled',
            label: 'Disabled',
            context: {
                text: 'Disabled',
                disabled: true
            }
        }
    ]
};
