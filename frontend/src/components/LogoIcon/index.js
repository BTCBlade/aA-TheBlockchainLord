import { ReactComponent as Logo } from "./lord.svg";
import "./LogoIcon.css";

export default function LogoIcon({ loggedIn }) {
  if (loggedIn) {
    //return <img src={LogoInverted} alt="" className="LogoIcon" />;
    return <Logo className="LogoIcon" />;
  } else {
    return <Logo className="LogoIcon" />;
  }
}
