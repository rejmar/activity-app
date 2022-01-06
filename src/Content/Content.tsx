import { StyledContent } from "./ContentStyles";
import BoredIcon from "../images/bored.png";

const Content: React.FunctionComponent = () => {
  return (
    <StyledContent>
      <img src={BoredIcon} alt={"bored-icon"} />
    </StyledContent>
  );
};

export default Content;
