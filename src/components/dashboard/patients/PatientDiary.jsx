import "./PatientDiary.css";
import PatientLog from "./PatientLog";

const PatientDiary = () => {
  return (
    <div className="dashboard_main-content">
      <div className="dashboard_main-content--items">
        <PatientLog />
      </div>
    </div>
  );
};

export default PatientDiary;
