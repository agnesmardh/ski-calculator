import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

import './App.css';
import SkiLengthFormChild from "./components/SkiLengthFormChild";
import SkiLengthFormAdult from "./components/SkiLengthFormAdult";

function App() {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div className={"App"}>
            <h1 className={"heading"}>Beräkna längden på dina skidor!</h1>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        Barn upp till 8 år
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Vuxna och barn över 8 år
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <div className={"form"}>
                    <SkiLengthFormChild/>
                    </div>
                </TabPane>
                <TabPane tabId="2">
                    <div className={"form"}>
                        <SkiLengthFormAdult/>
                    </div>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default App;
