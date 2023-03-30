import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const panes = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]
const color = 'grey';
class NavBar extends Component {
    render() {
        return (
            <div>
                <Tab
                    menu={{ color, inverted: true, attached: true, tabular: true }}
                    panes={panes}
                />
            </div>
        )
    }
}
export default NavBar;
