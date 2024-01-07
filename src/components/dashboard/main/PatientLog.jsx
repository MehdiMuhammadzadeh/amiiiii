const PatientLog = () => {
  const patientsNumbers = [1,2,3,4,5,6,4,5,6,8,8,5,8,5,8,5,8,9];
  return (
    <>
      {patientsNumbers.map((item, index) => {
        return (
            <div key={index} className="dashboard_main-content--item">
              <div className="dashboard_main-content--item-userinfo">
                <div>
                  <img
                    className="session_item-avatar"
                    src="https://avatars.githubusercontent.com/u/53970818?v=4"
                    alt="avatar"
                  />
                </div>
                <div>
                  <h2 className="patient-name">Anna Green</h2>
                  <div>
                    <span>Last Entry: </span>
                    <span>22/02/2024</span>
                  </div>
                </div>
              </div>
              <div className="horizental-line"></div>
              <div className="session-date">
                <ul className="session-date_items">
                  <li className="session-date_item">
                    <span>Last Session:</span>
                    <span>10/02/2024</span>
                  </li>
                  <li className="session-date_item">
                    <span>Next Session:</span>
                    <span>10/03/2024</span>
                  </li>
                </ul>
              </div>
              <div className="horizental-line"></div>
              <div className="sessions-icons">
                <span>
                  <i className="bi bi-trash3 fw-3"></i>
                </span>
                <span>
                  <i className="bi bi-layout-text-window"></i>
                </span>
              </div>
            </div>

        );
      })}
    </>
  );
};

export default PatientLog;
