import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  float: inline-start;
  justify-content: left;
  align-items: center;
  padding-left: 1rem;
  background-color: #0488d0;
  color: #eeeeee;
  margin-bottom: 1rem;
`;

export const StyledButton = styled.button`
  margin-left: auto;
  margin-right: 2rem;
  width: auto;
  height: 4rem;
  padding: 0.5rem 1rem;
  font-size: 2rem;
  font-weight: 700;
  background-color: #16537e;
  color: #eeeeee;
  border-radius: 1rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #6aa84f;
  }
`;
