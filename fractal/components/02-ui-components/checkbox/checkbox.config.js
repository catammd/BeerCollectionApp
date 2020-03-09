module.exports = {
    status: "ready",
    variants: [
        {
            name: "default",
            label: "Checkbox",
            context: {
                label: "Checkbox"
            },
        },
        {
            name: "checkbox--checked",
            label: "Checked checkbox",
            context: {
                checked: true,
                label: "Checked checkbox"
            }
        },
        {
            name: "checkbox--indeterminate",
            label: "Indeterminate checkbox",
            notes: "State when checkbox has nested checkboxes and some are checked",
            context: {
                indeterminate: true,
                label: "Indeterminate checkbox"
            }
        },
        {
            name: "checkbox--indeterminate-disabled",
            label: "Disabled indeterminate checkbox",
            notes: "State when checkbox has nested checkboxes and some are checked and disabled",
            context: {
                indeterminate: true,
                disabled: true,
                label: "Disabled indeterminate checkbox"
            }
        },
        {
            name: "checkbox--disabled",
            label: "Disabled checkbox",
            context: {
                disabled: true,
                label: "Disabled checkbox"
            }
        },
        {
            name: "checkbox--disabled-checked",
            label: "Disabled checked checkbox",
            context: {
                disabled: true,
                checked: true,
                label: "Disabled checked checkbox"
            }
        }
    ]
};
