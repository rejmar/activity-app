import { FunctionComponent, useReducer } from "react";
import Content from "./Content/Content";
import {
  DispatchContext,
  initialContext,
  reducer,
  StateContext,
} from "./contexts/appContext";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import StyledApp from "./styles";

const App: FunctionComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialContext);
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <StyledApp>
          <Header />
          <Content />
          <Footer />
        </StyledApp>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default App;
