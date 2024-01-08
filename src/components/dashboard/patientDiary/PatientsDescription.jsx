import "./PatientsDescription.css";

const PatientsDescription = () => {
  const patientRecord_titles = [
    { title: "Description", id: 1 },
    {
      title: "Feeling Description:",
      id: 2,
    },
    {
      title: "Did anything make you feel bad?",
      id: 3,
    },
    { title: "if you had Drugs or Peels or Alcohol? how did it feel?", id: 4 },
  ];

  return (
    <div className="patient-description">
      <div className="patient-description_container">
        <div className="patient-description__title-section">
          <div className="title-part">
            <div className="title">
              <i style={{ color: "crimson" }} className="bi bi-emoji-frown"></i>
              <h4 style={{ color: "crimson" }}>NightMare</h4>
            </div>
            <div className="title-icon">
              <i style={{ color: "#00ff55" }} className="bi bi-android2"></i>
              <i
                style={{ color: "skyblue", marginLeft: "10px" }}
                className="bi bi-apple"
              ></i>
            </div>
          </div>
          <div className="date-part">
            <span>02/10/2023</span>
            <span>10:22:45</span>
          </div>
        </div>
        {patientRecord_titles.map((item, index) => {
          return (
            <div key={index} className="record-description">
              <div className="record-description__item">
                <h5>{item.title}</h5>
                <p>
                  While Bootstrap doesn’t include an icon set by default, we do
                  have our own comprehensive icon library called Bootstrap
                  Icons. Feel free to use them or any other icon set in your
                  project. We’ve included details for Bootstrap Icons and other
                  preferred icon sets below. While Bootstrap doesn’t include an
                  icon set by default, we do have our own comprehensive icon
                  library called Bootstrap Icons. Feel free to use them or any
                  other icon set in your project. We’ve included details for
                  Bootstrap Icons and other preferred icon sets below. While
                  Bootstrap doesn’t include an icon set by default, we do have
                  our own comprehensive icon library called Bootstrap Icons.
                  Feel free to use them or any other icon set in your project.
                  We’ve included details for Bootstrap Icons and other preferred
                  icon sets below.
                </p>
              </div>
            </div>
          );
        })}
        <div className="status">
          <div className="status-photos">
            <div className="photo-item">
              <img src="https://picsum.photos/200/" alt="avat==" />
            </div>
            <div className="photo-item">
              <img src="https://picsum.photos/200/" alt="avat==" />
            </div>
            <div className="photo-item">
              <img src="https://picsum.photos/200/" alt="avat==" />
            </div>
            <div className="photo-item">
              <img src="https://picsum.photos/200/" alt="avat==" />
            </div>
            <div className="photo-item">
              <img src="https://picsum.photos/200/" alt="avat==" />
            </div>
            <div className="photo-item">
              <img src="https://picsum.photos/200/" alt="avat==" />
            </div>
          </div>
          <div className="status-modes">
            <table>
              <tr>
                <td>Sleep:</td>
                <td>10:30 am</td>
                <td>02:25 pm</td>
                <td style={{ color: "#f5b869" }}>h8</td>
              </tr>
              <tr>
                <td>Activities:</td>
                <td>
                  <i style={{ color: "purple" }} className="bi bi-apple"></i>
                  <i style={{ color: "teal" }} className="bi bi-apple"></i>
                </td>
                <td>
                  <i style={{ color: "pink" }} className="bi bi-apple"></i>
                  <i style={{ color: "yellow" }} className="bi bi-apple"></i>
                </td>
                <td>
                  <i style={{ color: "orange" }} className="bi bi-apple"></i>
                  <i style={{ color: "blue" }} className="bi bi-apple"></i>
                </td>
              </tr>
              <tr>
                <td>Meals and Edibles:</td>
                <td>
                  <i style={{ color: "green" }} className="bi bi-apple"></i>
                  <i style={{ color: "orange" }} className="bi bi-apple"></i>
                  <i style={{ color: "red" }} className="bi bi-apple"></i>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PatientsDescription;

/*
                <div className='status'>
                    <div className='status-photos'>
                        <div className='photo-item'>
                            <img src="https://picsum.photos/200/" alt="" />
                        </div>
                        <div className='photo-item'>
                            <img src="https://picsum.photos/200/" alt="" />
                        </div>
                        <div className='photo-item'>
                            <img src="https://picsum.photos/200/" alt="" />
                        </div>
                        <div className='photo-item'>
                            <img src="https://picsum.photos/200/" alt="" />
                        </div>
                        <div className='photo-item'>
                            <img src="https://picsum.photos/200/" alt="" />
                        </div>
                        <div className='photo-item'>
                            <img src="https://picsum.photos/200/" alt="" />
                        </div>
                    </div>
                    <div className='status-modes'>
                        <div className='status_sleep-time'>
                            <span>Sleep:</span>
                            <span>01:30 am</span>
                            <span>09:35 am</span>
                            <span>8h</span>
                        </div>
                        <div className='status_activities-time'>
                            <span>Activities</span>
                            <span></span>
                        </div>
                        <div className='status_food-time'></div>
                    </div>
                </div>
                */
