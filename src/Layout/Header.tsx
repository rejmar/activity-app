import { FunctionComponent, useContext } from "react";
import { DispatchContext } from "../App";
import { StyledButton, StyledHeader } from "./HeaderStyles";

const Header: FunctionComponent = () => {
  const dispatch = useContext(DispatchContext);
  const handleClick = () => {
    dispatch({ type: "getActivity", payload: "Fascinating activity" });
  };
  return (
    <StyledHeader>
      <h1>Feeling bored?</h1>
      <StyledButton onClick={handleClick}>Find me an activity!</StyledButton>
    </StyledHeader>
  );
};

export default Header;
