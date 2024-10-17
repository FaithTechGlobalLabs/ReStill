import React, { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { API_URL, MOOD_LEVELS } from "@/constants/AppConstants";

const CURRENT_USER_ID = 1; // Replace with actual user ID retrieval logic

type MoodState = {
  mood: string;
  moodHistory: Array<{ moodLevel: string; createdAt: string }>;
};

type MoodAction =
  | { type: "SET_MOOD"; payload: string }
  | {
      type: "SET_MOOD_HISTORY";
      payload: Array<{ moodLevel: string; createdAt: string }>;
    };

const initialState: MoodState = {
  mood: MOOD_LEVELS[Math.floor(MOOD_LEVELS.length / 2)],
  moodHistory: [],
};

const moodReducer = (state: MoodState, action: MoodAction): MoodState => {
  switch (action.type) {
    case "SET_MOOD":
      return { ...state, mood: action.payload };
    case "SET_MOOD_HISTORY":
      return { ...state, moodHistory: action.payload };
    default:
      return state;
  }
};

const MoodContext = createContext<
  | {
      state: MoodState;
      dispatch: React.Dispatch<MoodAction>;
      handleMoodSelection: (selectedMood: string) => Promise<void>;
    }
  | undefined
>(undefined);

export const MoodProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(moodReducer, initialState);

  const fetchMoodHistory = async () => {
    try {
      const response = await axios.get(`${API_URL}/mood/${CURRENT_USER_ID}`);
      dispatch({ type: "SET_MOOD_HISTORY", payload: response.data });
      if (response.data.length > 0) {
        dispatch({ type: "SET_MOOD", payload: response.data[0].moodLevel });
      }
    } catch (error) {
      console.error("Error fetching mood history:", error);
    }
  };

  const handleMoodSelection = async (selectedMood: string) => {
    dispatch({ type: "SET_MOOD", payload: selectedMood });
    try {
      await axios.post(`${API_URL}/mood/`, {
        userId: CURRENT_USER_ID,
        moodLevel: selectedMood,
      });
      fetchMoodHistory();
    } catch (error) {
      console.error("Error saving mood:", error);
    }
  };

  useEffect(() => {
    fetchMoodHistory();
  }, []);

  return (
    <MoodContext.Provider value={{ state, dispatch, handleMoodSelection }}>
      {children}
    </MoodContext.Provider>
  );
};

export const useMood = () => {
  const context = useContext(MoodContext);
  if (context === undefined) {
    throw new Error("useMood must be used within a MoodProvider");
  }
  return context;
};
