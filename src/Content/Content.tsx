import { StyledContent } from "./ContentStyles";
import BoredIcon from "../images/bored.png";
import { useContext } from "react";
import { StateContext } from "../contexts/appContext";

const Content: React.FunctionComponent = () => {
  const { activity } = useContext(StateContext);
  return (
    <StyledContent>
      <img src={BoredIcon} alt={"bored-icon"} />
      <h1>{activity}</h1>
    </StyledContent>
  );
};

export default Content;
