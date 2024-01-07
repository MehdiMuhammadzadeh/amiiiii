import './PatientDiary.css';
import PatientsDescription from "./PatientsDescription.jsx";
import PatientRecord from "./PatientRecord.jsx";


const PatientDiary = () => {
    return (
        <div className='patient-diary__container'>
            <PatientRecord />
            <PatientsDescription />
        </div>
    )
}

export default PatientDiary;
{/*<div className='patient-diary-date_container'>*/}
{/*    <div className='patient-date'>*/}
{/*        <span>02/10/2024</span>*/}
{/*        <span>01:18:25</span>*/}
{/*    </div>*/}
{/*    <div className="patient-diary-container__item">*/}

{/*    </div>*/}
{/*</div>*/}