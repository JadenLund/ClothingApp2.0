import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import About from '../components/About'
import MakeAnOutfit from '../components/MakeAnOutfit'
import GetInspired from '../components/GetInspired'
import Home from '../components/Home'
import icon from '../assets/Images/Icon.jpg'
const panes = [

    { menuItem: 'HOME', render: () => <Tab.Pane><Home /></Tab.Pane> },
    { menuItem: 'ABOUT', render: () => <Tab.Pane><About /></Tab.Pane> },
    { menuItem: 'MAKE AN OUTFIT', render: () => <Tab.Pane><MakeAnOutfit /></Tab.Pane> },
    { menuItem: 'GET INSPIRED', render: () => <Tab.Pane><GetInspired /></Tab.Pane> },
]
const color = 'grey';
class NavBar extends Component {
    render() {
        return (
            <div className='navbar'>
                {/* <img src={icon} alt="Logo" /> */}
                <Tab
                    menu={{ color, inverted: true, attached: true, tabular: false }}
                    panes={panes}
                />
            </div>
        )
    }
}
export default NavBar;
