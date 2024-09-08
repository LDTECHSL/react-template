import "../Common/css/styles.css";
import Stat_card from "../Components/StatCard";
import Navbar from "../Layouts/Navbar";

export default function Dashboard() {
  return (
    <div>
      <Navbar>
        <div className="dashboard-outer">
          <div className="dashboard-header-outer">
            <h3>Dashboard</h3>
          </div>
          <div className="space-bar"></div>
          <div className="stat-cards-outer">
            <div className="stat-cards-inner align-left"><Stat_card/></div>
            <div className="stat-cards-inner"><Stat_card/></div>
            <div className="stat-cards-inner"><Stat_card/></div>
            <div className="stat-cards-inner align-right"><Stat_card/></div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
