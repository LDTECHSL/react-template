/* eslint-disable react/jsx-pascal-case */
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
            <div className="stat-cards-inner align-left">
            <Stat_card 
                title="Total Page Views" 
                total="4,42,236" 
                percentage="59.3%" 
                footerText="You made an extra 20,000 this week" 
                isTrendingUp={true} 
            />
            </div>
            <div className="stat-cards-inner">
            <Stat_card 
                title="Total Users" 
                total="78,250" 
                percentage="70.5%" 
                footerText="You made an extra 8,900 this week" 
                isTrendingUp={true} 
            />
            </div>
            <div className="stat-cards-inner">
            <Stat_card 
                title="Total Orders" 
                total="18,800" 
                percentage="27.4%" 
                footerText="You made an extra 1,943 this week" 
                isTrendingUp={false} 
            />
            </div>
            <div className="stat-cards-inner align-right">
            <Stat_card 
                title="Total Page Views" 
                total="$35,700" 
                percentage="27.4%" 
                footerText="You made an extra $10,100 this week" 
                isTrendingUp={false} 
            />
            </div>
          </div>
        </div>
      </Navbar>
    </div>
  );
}
