/* eslint-disable react/jsx-pascal-case */
import BasicLineChart from "src/Components/LineChart";
import "../Common/css/styles.css";
import Stat_card from "../Components/StatCard";
import Navbar from "../Layouts/Navbar";
import { MainCard } from "src/Components/Card";
import PieActiveArc from "src/Components/PieChart";
import DataTable from "src/Components/Table";

export default function Dashboard() {
  return (
    <Navbar>
      <div className="dashboard-outer">
        <div className="dashboard-header-outer">
          <span className="content-title-text">Dashboard</span>
        </div>
        <div className="space-bar"></div>
        <div className="stat-cards-outer">
          <div className="stat-cards-inner">
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

          <div className="stat-cards-inner">
            <Stat_card
              title="Total Page Views"
              total="$35,700"
              percentage="27.4%"
              footerText="You made an extra $10,100 this week"
              isTrendingUp={false}
            />
          </div>
        </div>
        <div className="space-bar"></div>
        <div className="content-main-outer">
          <div className="content-main-inner cmi1">
            <div className="content-title">
              <span className="content-title-text">Unique Visitor</span>
            </div>
            <div className="space-bar"></div>
            <MainCard>
              <BasicLineChart />
            </MainCard>
          </div>
          <div className="content-main-inner cmi2">
            <div className="content-title">
              <span className="content-title-text">Income Overview</span>
            </div>
            <div className="space-bar"></div>
            <MainCard>
              <div className="piechart-outer">
                <PieActiveArc />
              </div>
            </MainCard>
          </div>
        </div>
        <div className="space-bar"></div>
        <div className="content-title">
          <span className="content-title-text">Project Details</span>
        </div>
        <div className="space-bar"></div>
        <div className="content-main-outer">
          <MainCard width="100%">
            <DataTable />
          </MainCard>
        </div>
        <div className="space-bar"></div>
      </div>
    </Navbar>
  );
}
