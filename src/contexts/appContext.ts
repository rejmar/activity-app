import { createContext } from "react";

export type ContextType = {
  activity: string;
};
export const initialContext: ContextType = {
  activity: "",
};

export const reducer = (state: ContextType, action: ActionType) => {
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
