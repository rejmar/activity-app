import { FunctionComponent } from "react";
import Content from "./Content/Content";
import Header from "./Layout/Header";
import StyledApp from "./styles";

const App: FunctionComponent = () => (
  <StyledApp>
    <Header />
    <Content />
  </StyledApp>
);

export default App;
