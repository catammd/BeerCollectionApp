import { Component, h, Element, Host } from "@stencil/core";

@Component({
    tag: "nds-tab-interface",
    styleUrl: "tab-interface.scss"
})
export class TabInterface {
    private tabInterface: HTMLDivElement;
    private tablist;
    private tabs = [];
    private panels;

    @Element() host: HTMLDivElement;

    /**
     * All nodes that is used for the tab-interface is collected here
     * The findNodes() is called in componentDidLoad()
     */
    private findNodes() {
        this.tabInterface = this.host.querySelector(".c-tab-interface");
        this.tablist = this.tabInterface.querySelector("ul");
        this.tabs = this.tablist.querySelectorAll("a");
        this.panels = this.tabInterface.querySelectorAll('[id^="tab"]');
    }

    /**
     * Click events are attached here.
     * The attachClickEvent() is called in userEvents()
     */
    private attachClickEvents(tab) {
        tab.addEventListener("click", e => {
            e.preventDefault();
            let currentTab = this.tablist.querySelector("[aria-selected]");
            if (e.currentTarget !== currentTab) {
                this.switchTab(currentTab, e.currentTarget);
            }
        });
    }

    /**
     * Key events are attached here.
     * The attachKeyEvent() is called in userEvents()
     */
    private attachKeyEvents(tab, i) {
        tab.addEventListener("keydown", e => {
            // Get the index of the current tab in the tabs node list
            let index = Array.prototype.indexOf.call(
                this.tabs,
                e.currentTarget
            );

            // Work out which key the user is pressing and
            // Calculate the new tab's index where appropriate
            let dir =
                e.which === 37
                    ? index - 1
                    : e.which === 39
                    ? index + 1
                    : e.which === 40
                    ? "down"
                    : null;

            if (dir !== null) {
                e.preventDefault();

                // If the down key is pressed, move focus to the open panel,
                // otherwise switch to the adjacent tab
                dir === "down"
                    ? this.panels[i].focus()
                    : this.tabs[dir]
                    ? this.switchTab(e.currentTarget, this.tabs[dir])
                    : void 0;
            }
        });
    }

    /**
     * Tabs are switched here
     * The function looks at the old tab and remove the aria-labe to add it to the clicked tab
     * The switchTab() is called in attachClickEvents() & attachKeyEvents()
     */
    private switchTab = (oldTab, newTab) => {
        newTab.focus();
        // Make the active tab focusable by the user (Tab key)
        newTab.removeAttribute("tabindex");
        // Set the selected state
        newTab.setAttribute("aria-selected", "true");
        oldTab.removeAttribute("aria-selected");
        oldTab.setAttribute("tabindex", "-1");
        // Get the indices of the new and old tabs to find the correct
        // tab panels to show and hide
        let index = Array.prototype.indexOf.call(this.tabs, newTab);
        let oldIndex = Array.prototype.indexOf.call(this.tabs, oldTab);
        this.panels[oldIndex].hidden = true;
        this.panels[index].hidden = false;
    };

    /**
     * All events are called here based on users interaction
     * The userEvents() is called in initTabInterface()
     */
    private userEvents() {
        this.tabs.forEach((tab, i) => {
            tab.setAttribute("role", "tab");
            tab.setAttribute("id", "tab" + (i + 1));
            tab.setAttribute("tabindex", "-1");
            tab.parentNode.setAttribute("role", "presentation");

            // Handle clicking of tabs for mouse users
            this.attachClickEvents(tab);

            // Handle keydown events for keyboard users
            this.attachKeyEvents(tab, i);
        });
    }

    /**
     * Add semantics and hide them all on init
     * The hideTabPanels() is called in initTabInterface()
     */
    private hideTabPanels() {
        this.panels.forEach((panel, i) => {
            panel.setAttribute("role", "tabpanel");
            panel.setAttribute("tabindex", "-1");
            panel.setAttribute("aria-labelledby", this.tabs[i].id);
            panel.hidden = true;
        });
    }

    /**
     * Init tab-interface and set the first tab to active when component is loaded
     * The function is called in componentDidLoad()
     */
    private initTabInterface() {
        // Init main functions
        this.userEvents();
        this.hideTabPanels();

        // Add the tablist role to the first <ul> in the .tabbed container
        this.tablist.setAttribute("role", "tablist");

        // Initially activate the first tab and reveal the first tab panel
        this.tabs[0].removeAttribute("tabindex");
        this.tabs[0].setAttribute("aria-selected", "true");
        this.panels[0].hidden = false;
    }

    componentDidLoad() {
        this.findNodes();
        this.initTabInterface();
    }

    render() {
        return (
            <Host>
                <div class="c-tab-interface">
                    <slot name="tabs-list" />
                    <slot name="tabs-content" />
                </div>
            </Host>
        );
    }
}
