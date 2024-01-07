import './PatientRecord.css';
import PatientRecorsItems from "./PatientRecorsItems.jsx";

const PatientRecord = () => {

    const photos = [1, 2, 3, 4]

    return (
        <div className='patient-record'>
            <h3>Patient Records</h3>
            <PatientRecorsItems photos={photos}/>
            <PatientRecorsItems photos={photos}/>
            <PatientRecorsItems photos={photos}/>
            <PatientRecorsItems photos={photos}/>
            <PatientRecorsItems photos={photos}/>
        </div>
    )
}
export default PatientRecord;