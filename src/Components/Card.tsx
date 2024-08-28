import "../Common/css/card.css";
import { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

export default function Card({ children }: Readonly<Props>) {
  return <div className="card">{children}</div>;
}
