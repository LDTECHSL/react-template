import "../Common/css/constructions.css";
import { MainCard } from "./Card";
import constructionsImage from "../Assets/Images/constructions.jpg";

export default function Construction() {
  return (
    <MainCard>
      <div>
        <div className="constructions-outer">
          <h1>Page Under Construction</h1>
        </div>
        <div className="constructions-outer">
          <img
            className="constructions-image"
            src={constructionsImage}
            alt=""
          />
        </div>
        <div className="constructions-outer set-padding">
          <span>Back in to the <span>Dashboard</span> page.</span>
        </div>
      </div>
    </MainCard>
  );
}
