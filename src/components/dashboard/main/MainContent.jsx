import "./MainContent.css";
import PatientLog from "./PatientLog";

const MainContent = () => {
  return (
    <div className="dashboard_main-content">
      <div className="dashboard_main-content--items">
        <PatientLog />
      </div>
    </div>
  );
};

export default MainContent;