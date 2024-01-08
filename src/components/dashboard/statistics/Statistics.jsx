import { useState } from "react";
import BarChart from "../../charts/BarChart";
import "./Statistics.css";
import { UserData } from "./Data";
import LineChart from "../../charts/LineChart";

const Statistics = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((item) => item.date),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((item) => item.userGain),
        backgroundColor: [
            "#ff0000",
            "#ff4000",
            "#ff8000",
            "#ffbf00",
            "#ffff00",
        ]
      },
    ],
  });

  return (
    <div className="statistic-container">
      <div className="statistic-container__item">   
        <div style={{width:'100%', height:'250px'}}>
        <BarChart chartData={userData} />
        </div>
      </div>
      <div className="statistic-container__item">   
        <div style={{width:'100%', height:'250px'}}>
        <LineChart chartData={userData} />
        </div>
      </div>
      <div className="statistic-container__item">   
        <div style={{width:'100%', height:'250px'}}>
        <BarChart chartData={userData} />
        </div>
      </div>
      <div className="statistic-container__item">   
        <div style={{width:'100%', height:'250px'}}>
        <LineChart chartData={userData} />
        </div>
      </div>
    </div>
  );
};
export default Statistics;
