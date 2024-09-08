import "../Common/css/styles.css";
import { MainCard } from "../Components/Card";
import Navbar from "../Layouts/Navbar";

export default function Dashboard() {
  return (
    <div>
      <Navbar>
        <MainCard>
          <div className="dashboard-outer">
            <div className="dashboard-header-outer">
              <h3>Dashboard</h3>
            </div>
          </div>
        </MainCard>
      </Navbar>
    </div>
  );
}
