import React, { createContext, useReducer } from "react";
import thumbsReducer from "../reducers/thumb.reducer";
import { thumbsContextType, thumbsDispatchContextType } from "types/thumbs";

export const thumbsContext = createContext<thumbsContextType>([]);
export const thumbsDispatchContext = createContext<thumbsDispatchContextType>(
  () => []
);

export const ThumbsProvider = (
  props: React.PropsWithChildren<unknown>
): JSX.Element => {
  const [thumbs, thumbsDispatch] = useReducer(thumbsReducer, []);
  const { children } = props;
  return (
    <thumbsContext.Provider value={thumbs}>
      <thumbsDispatchContext.Provider value={thumbsDispatch}>
        {children}
      </thumbsDispatchContext.Provider>
    </thumbsContext.Provider>
  );
};
