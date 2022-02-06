import { createContext, FunctionComponent, useReducer } from "react";
import Content from "./Content/Content";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import StyledApp from "./styles";

type ContextType = {
  activity: string;
};
const initialContext: ContextType = {
  activity: "Nothing to do",
};

const reducer = (state: ContextType, action: ActionType) => {
  switch (action.type) {
    case "getActivity":
      return { ...state, activity: action.payload };
  }
  return state;
};

export const DispatchContext = createContext<React.Dispatch<ActionType>>(
  () => {}
);
export const StateContext = createContext<ContextType>(initialContext);

type ActionType = {
  type: string;
  payload: string;
};
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
