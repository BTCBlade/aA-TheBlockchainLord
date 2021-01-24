import { ReactComponent as Logo } from "./lord.svg";
import LogoInverted from "./lord-inverted.png";
import "./LogoIcon.css";

export default function LogoIcon({ loggedIn }) {
  if (loggedIn) {
    return <img src={LogoInverted} alt="" className="LogoIcon" />;
  } else {
    return <Logo className="LogoIcon" />;
  }
}
