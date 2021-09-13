import { thumb, thumbAction } from "types/thumbs";

const reducer = (state: thumb[], action: thumbAction): thumb[] => {
  switch (action.type) {
    case "SET":
      return [...action.thumbs];
    case "UPDATE":
      return state.map((thumb: thumb) =>
        thumb.id === action.id
          ? { ...thumb, votes: action.votes, lastUpdated: Date.now() }
          : thumb
      );
    default:
      return state;
  }
};

export default reducer;
