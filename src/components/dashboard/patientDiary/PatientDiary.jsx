import "./PatientDiary.css";
import PatientsDescription from "./PatientsDescription.jsx";
import PatientRecord from "./PatientRecord.jsx";

const PatientDiary = () => {
  return (
    <div className="patient-diary__container">
      <PatientRecord />
      <PatientsDescription />
    </div>
  );
};

export default PatientDiary;
