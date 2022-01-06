import { FunctionComponent } from "react";
import Content from "./Content/Content";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import StyledApp from "./styles";

const App: FunctionComponent = () => (
  <StyledApp>
    <Header />
    <Content />
    <Footer />
  </StyledApp>
);

export default App;
