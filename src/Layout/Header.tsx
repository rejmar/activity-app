import { FunctionComponent } from "react";
import { StyledButton, StyledHeader } from "./HeaderStyles";

const Header: FunctionComponent = () => {
  const handleClick = () => {};

  return (
    <StyledHeader>
      <h1>Feeling bored?</h1>
      <StyledButton onClick={handleClick}>Find me an activity!</StyledButton>
    </StyledHeader>
  );
};

export default Header;
