import { ReactNode, useState } from "react"
import "./Tabs.css"


type Tabs = {
    tabs: {
        tabComponent: ReactNode,
        tabName: string
    }[],
}

export const Tabs = ({ tabs }: Tabs) => {
    const [tab, setTab] = useState(tabs[0].tabComponent);

    return <>
        <ul className="tabs">
            {tabs.map((tab) => (
                <li onClick={() => setTab(tab.tabComponent)}>{tab.tabName}</li>
            ))}
        </ul>
        {tab}
    </>
}