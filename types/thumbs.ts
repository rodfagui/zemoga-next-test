export type thumb = {
  id: string;
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: number | Date;
  votes: {
    positive: number;
    negative: number;
  };
};

export type thumbAction =
  | {
      type: "UPDATE";
      id: string;
      votes: { positive: number; negative: number };
    }
  | {
      type: "SET";
      thumbs: thumb[];
    };

export type thumbsContextType = thumb[];

export type thumbsDispatchContextType = React.Dispatch<thumbAction>;
