module.exports = {
    default: "tab-interface",
    context: {
        tabs: [
            {
                tabName: "Tab 1",
                tabId: "tab1",
                tabContentHeading: "Tab heading 1",
                tabContent: "Commodo ut laborum fugiat aliqua.",
                isCard: false,
                isText: true
            },
            {
                tabName: "Tab 2",
                tabId: "tab2",
                tabContentHeading: "Tab heading 2",
                tabContent: "Commodo ut laborum fugiat aliqua.",
                isCard: false,
                isText: true
            },
            {
                tabName: "Tab 3",
                tabId: "tab3",
                tabContentHeading: "Tab heading 3",
                tabContent: "Commodo ut laborum fugiat aliqua.",
                isCard: false,
                isText: true
            },
            {
                tabName: "Tab 4",
                tabId: "tab4",
                tabContentHeading: "Tab heading 4",
                tabContent: "Commodo ut laborum fugiat aliqua.",
                isCard: false,
                isText: true
            }
        ]
    },
    variants: [
        {
            name: "tab-interface-cards",
            context: {
                tabs: [
                    {
                        tabName: "Tab 1",
                        tabId: "tab1",
                        tabContentHeading: "Tab heading 1",
                        tabContent: "Commodo ut laborum fugiat aliqua.",
                        isCard: true,
                        isText: false
                    },
                    {
                        tabName: "Tab 2",
                        tabId: "tab2",
                        tabContentHeading: "Tab heading 2",
                        tabContent: "Commodo ut laborum fugiat aliqua.",
                        isCard: true,
                        isText: false
                    },
                    {
                        tabName: "Tab 3",
                        tabId: "tab3",
                        tabContentHeading: "Tab heading 3",
                        tabContent: "Commodo ut laborum fugiat aliqua.",
                        isCard: true,
                        isText: false
                    },
                    {
                        tabName: "Tab 4",
                        tabId: "tab4",
                        tabContentHeading: "Tab heading 4",
                        tabContent: "Commodo ut laborum fugiat aliqua.",
                        isCard: true,
                        isText: false
                    }
                ]
            }
        }
    ]
};
