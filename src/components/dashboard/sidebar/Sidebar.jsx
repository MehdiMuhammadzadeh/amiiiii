import "./Sidebar.css";
import {useState} from "react";

const Sidebar = ({changePage, pageType}) => {
    const [expand, setExpand] = useState(false);
    const [activeTab, setActiveTab] = useState(10);
    const [activeListItem, setActiveListItem] = useState(10);

    const tabData = [{label: 'Statistics', tabId: "1"}, {label: 'Patient Diary', tabId: "2"}, {
        label: 'My Notes', tabId: "3"
    }, {label: 'Tickets', tabId: "4"}, {label:'main list', tabId: '5'}]

    const handleTab = (type, index) => {
        setActiveTab(index)
        changePage(type);
    }
    const expandContract = () => {
        setExpand(!expand);
    };

    return (<div className="sidebar">
            <div className="sidedar-header">
                <div className="avatar">
                    <img
                        src="https://avatars.githubusercontent.com/u/53970818?v=4"
                        alt="avatar"
                    />
                </div>
                <div className="user-data">
                    <h2>Mehdi Mohammadzadeh</h2>
                    <p>mehdi.mrpr93@gmail.com</p>
                </div>
            </div>
            <div className="sidebar-content">
                <div className="sidebar-content_menu">
                    {/*${index === activeTab ? "active sidebar-content__item": "sidebar-content__item"}*/}
                    <h3  className={`active_list--item`} style={pageType < 6 && pageType > 0? {color:'#f5b869'}:{color: '#bebebe'}} onClick={expandContract}>Patients</h3>
                    <div id="expand-container">
                        <div id="expand-contract" style={{marginBottom: "5px"}} className="expanded">
                            {expand && (<ul className="sidebar-content__items">
                                    {tabData.map((item, index) => {
                                        return (<li key={index} onClick={() => handleTab(item.tabId, index)}
                                                    className={`tab ${index === activeTab ? "active sidebar-content__item" 
                                                        : "sidebar-content__item"}`}>{item.label}</li>)
                                    })}
                                </ul>)}
                        </div>
                    </div>
                </div>
                <div className="sidebar-content_menu">
                    <h3 onClick={()=> changePage("kkkk",6)}>Statistics</h3>
                </div>
                <div className="sidebar-content_menu">
                    <h3>Settings</h3>
                </div>
            </div>
        </div>);
};

export default Sidebar;
