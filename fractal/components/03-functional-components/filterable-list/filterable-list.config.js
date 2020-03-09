module.exports = {
    default: "filterable-list",
    context: {
        tags: [
            {
                tagName: "All cities",
                reset: true
            },
            {
                tagName: "Show Danish cities",
                dataFilterTag: "danish",
                tagValue: ["Copenhagen"],
                reset: false
            },
            {
                tagName: "Show Swedish cities",
                dataFilterTag: "swedish",
                tagValue: [
                    "Alingsås",
                    "Åmål",
                    "Ängelholm",
                    "Djursholm",
                    "Helsingborg"
                ],
                reset: false
            },
            {
                tagName: "Show Italian cities",
                dataFilterTag: "italian",
                tagValue: ["Rome", "Milan"],
                reset: false
            }
        ]
    }
};
