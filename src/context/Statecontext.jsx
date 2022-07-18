import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const StateContext = createContext();
const ThemeColours = {
  Blackish: "bg-black ",
  Greenish: "bg-c-green ",
  Indigo: "bg-c-indigo",
};
const ThemeShapes = {
  Rounded: "rounded-full",
  Square: "",
};
const ThemeBorders = {
  Rounded: "rounded-t-full",
  Square: "",
};
export const ContextProvider = ({ children }) => {
  const [themeShape, setThemeShape] = useState(ThemeShapes.Rounded);
  const [themeBorder, setThemeBorder] = useState(ThemeBorders.Rounded);

  const [themeBG, setTheme] = useState(ThemeColours.Blackish);
  const [sidebar, setSidebar] = useState(false);

  return (
    <StateContext.Provider
      value={{
        themeBG,
        themeBorder,
        themeShape,
        setTheme,
        sidebar,
        setSidebar,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
