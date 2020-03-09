module.exports = {
    status: "ready",
    variants: [
        {
            name: "default",
            label: "Radio button",
            context: {
                label: "Radio button"
            },
        },
        {
            name: "radio-button--checked",
            label: "Checked radio button",
            context: {
                checked: true,
                label: "Checked radio button"
            }
        },
        {
            name: "radio-button--disabled",
            label: "Disabled radio button",
            context: {
                disabled: true,
                label: "Disabled radio button"
            }
        },
        {
            name: "radio-button--disabled-checked",
            label: "Disabled checked radio button",
            context: {
                disabled: true,
                checked: true,
                label: "Disabled checked radio button"
            }
        }
    ]
};
