import { Component, h, Element, Host } from "@stencil/core";

@Component({
    tag: "nds-filterable-list",
    styleUrl: "filterable-list.scss"
})
export class FilterableList {
    private filterable: HTMLDivElement;
    private filterableButtons;
    private filterItems;

    @Element() host: HTMLDivElement;

    /**
     * All nodes that is used for the filterable-list is collected here
     * The findNodes() is called in componentDidLoad()
     */
    private findNodes() {
        this.filterable = this.host.querySelector(".c-filterable");
        this.filterableButtons = this.filterable.querySelectorAll(
            ".c-filterable__btn"
        );
        this.filterItems = this.filterable.querySelectorAll(
            ".c-filterable-items"
        );
    }

    /**
     * Click events are attached here.
     * The attachEvents() is called in componentDidLoad()
     */
    private attachEvents() {
        this.filterableButtons.forEach(btn => {
            btn.addEventListener("click", e => {
                this.enableFiltering(e.currentTarget);
            });
        });
    }

    /**
     * Enable filtering is used to figure out what the user have clicked
     * The enableFiltering() is called in attachEvents()
     */
    private enableFiltering(button) {
        if (button.getAttribute("data-reset") === "true") {
            this.resetFilter();
        } else {
            var tag = button.getAttribute("data-filter-tag");
            this.filterTag(tag);
        }
    }

    /**
     * This function toggles on/off the tags
     * The filterTag() is called in enableFiltering()
     */
    private filterTag(tag) {
        this.filterItems.forEach(el => {
            let itemTags = el.getAttribute("data-tag");
            if (tag === itemTags) {
                el.setAttribute("data-toggle", "on");
            }

            if (itemTags != null) {
                if (itemTags.indexOf(tag) < 0) {
                    el.setAttribute("data-toggle", "off");
                }
            }
        });
    }

    /**
     * Reset filter to show all items in the given list
     * The resetFilter() is called in enableFiltering()
     */
    resetFilter() {
        for (let i = 0; i < this.filterItems.length; i++) {
            this.filterItems[i].setAttribute("data-toggle", "on");
        }
    }

    componentDidLoad() {
        this.findNodes();
        this.attachEvents();
    }

    render() {
        return (
            <Host>
                <div class="c-filterable">
                    <slot name="filter-tags" />
                    <slot name="filter-items" />
                </div>
            </Host>
        );
    }
}
