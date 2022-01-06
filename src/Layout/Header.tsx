import { FunctionComponent } from "react";
import { StyledButton, StyledHeader } from "./HeaderStyles";

const Header: FunctionComponent = () => {
  return (
    <StyledHeader>
      <h1>Feeling bored?</h1>
      <StyledButton>Find me an activity!</StyledButton>
    </StyledHeader>
  );
};

export default Header;
