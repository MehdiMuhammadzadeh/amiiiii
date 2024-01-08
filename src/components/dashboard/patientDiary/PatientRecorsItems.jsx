const PatientRecorsItems = ({photos})=>{
    return(
        <>
            <div className='patient-record_date--section' style={{marginTop:'10px'}}>
                <span>12/10/2023</span>
                <span>01:18:25</span>
            </div>
            <div className="patient-record-content--item">
                <div className='patient-record_modes'>
                     <span>
                        <i style={{color:'green'}} className="bi bi-1-circle"></i>
                        <i style={{marginLeft:'8px', marginRight:'8px', color:'white'}} className="bi bi-airplane-engines-fill"></i>
                        <i style={{color:'orange'}} className="bi bi-body-text"></i>
                    </span>
                    <span>
                        <i style={{color:'yellow'}} className="bi bi-badge-sd"></i>
                    </span>
                    <span>
                        <i style={{marginLeft:'8px', marginRight:'8px', color:'crimson'}} className="bi bi-body-text"></i>
                        <i className="bi bi-bootstrap-reboot" style={{color:'purple'}}></i>
                    </span>
                </div>
                <div className='patient-record-content--item-description'>
                    <h5>This is the best thing I have ever seen.</h5>
                    <div className='title-circle'>
                        <h5>This was an interesting jorney, i want to go again! .</h5>
                        <div className='circle'></div>
                    </div>
                    <p className='description'>
                        This is the best thing I have ever seen. This is the best thing I have ever seen.
                        This is the best thing I have ever seen. This is the best thing I have ever seen.
                    </p>
                </div>
                <div className='patient-record_photos'>
                    {
                        photos.map((item, index) => {
                            return (
                                <img key={index} style={{width: '28px', height: '28px', borderRadius: '4px'}}
                                     src="https://picsum.photos/200/300"
                                     alt="avatar"/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default PatientRecorsItems;