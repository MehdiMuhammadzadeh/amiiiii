import PatientDiary from "../components/dashboard/patients/PatientDiary.jsx";
import Sidebar from "../components/dashboard/sidebar/Sidebar";
import './Dashboard.css'
import {useRef, useState} from "react";
import Statistics from "../components/dashboard/statistics/Statistics.jsx";
import MyNotes from "../components/dashboard/myNotes/MyNotes.jsx";
import Tickets from "../components/dashboard/tickets/Tickets.jsx";

const Dashboard = () => {
    const [pageType, setPageType] = useState(true);
    const firstPageView =useRef( <PatientDiary/>);

    const changePage = (type) => {
        switch (type) {
            case '1':
                firstPageView.current = <Statistics/>
                // we use this to render the component and show it in the view
                setPageType(!pageType);
                return null;
            case '2':
                firstPageView.current = <PatientDiary/>
                setPageType(!pageType);
                return null;
            case '3':
                firstPageView.current = <MyNotes/>
                setPageType(!pageType);
                return null
            case '4':
                firstPageView.current = <Tickets/>
                setPageType(!pageType);
                return null;
            default:
                return null;
        }
    }
    return (
        <>
            <div className="container">
                <Sidebar changePage={changePage}/>
                {firstPageView.current}
            </div>
        </>
    );
};
export default Dashboard;
