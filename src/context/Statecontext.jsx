import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const ThemeColours = {
    Blackish: "bg-black ",
    Greenish: "bg-c-green ",
    Indigo: "bg-c-indigo",
  };
  const [themeBG, setTheme] = useState(ThemeColours.Greenish);
  const [sidebar, setSidebar] = useState(false);

  return (
    <StateContext.Provider value={{ themeBG, setTheme, sidebar, setSidebar }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
