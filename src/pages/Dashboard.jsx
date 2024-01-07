import MainContent from "../components/dashboard/main/MainContent.jsx";
import Sidebar from "../components/dashboard/sidebar/Sidebar";
import './Dashboard.css'
import {useRef, useState} from "react";
import Statistics from "../components/dashboard/statistics/Statistics.jsx";
import MyNotes from "../components/dashboard/myNotes/MyNotes.jsx";
import Tickets from "../components/dashboard/tickets/Tickets.jsx";
import PatientDiary from "../components/dashboard/patientDiary/PatientDiary.jsx";

const Dashboard = () => {
    const [pageType, setPageType] = useState(0);
    const firstPageView =useRef( <MainContent/>);

    const changePage = (type) => {
        switch (type) {
            case '1':
                firstPageView.current = <Statistics/>
                // we use this to render the component and show it in the view
                setPageType(type);
                return null;
            case '2':
                firstPageView.current = <PatientDiary/>
                setPageType(type);
                return null;
            case '3':
                firstPageView.current = <MyNotes/>
                setPageType(type);
                return null
            case '4':
                firstPageView.current = <Tickets/>
                setPageType(type);
                return null;
                case '5':
                firstPageView.current = <MainContent/>
                    setPageType(type);
                return null;
            default:  setPageType(type);
                return null;
        }
    }
    return (
        <>
            <div className="container">
                <Sidebar pageType={pageType} changePage={changePage}/>
                {firstPageView.current}
            </div>
        </>
    );
};
export default Dashboard;
