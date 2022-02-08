import { StyledContent } from "./ContentStyles";
import BoredIcon from "../images/bored.png";
import HappyIcon from "../images/happy.png";
import { useContext } from "react";
import { StateContext } from "../contexts/appContext";

const Content: React.FunctionComponent = () => {
  const { activity } = useContext(StateContext);
  const alt = activity ? "happy-icon" : "bored-icon";
  return (
    <StyledContent>
      <img src={activity ? HappyIcon : BoredIcon} alt={alt} />
      <h1>{activity}</h1>
    </StyledContent>
  );
};

export default Content;
