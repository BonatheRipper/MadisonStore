import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const StateContext = createContext();
const ThemeBackground = [
  { color: "bg-black " },
  { color: "bg-c-green " },
  { color: "bg-c-indigo " },
];

const ThemeShapes = {
  Rounded: "rounded-full",
  Square: null,
};
const ThemeBorders = {
  Rounded: "rounded-t-full",
  Square: null,
};
export const ContextProvider = ({ children }) => {
  const [themeShape, setThemeShape] = useState(ThemeShapes.Rounded);
  const [themeBorder, setThemeBorder] = useState(ThemeBorders.Rounded);

  const [themeBG, setThemeBG] = useState(ThemeBackground[1].color);
  const [sidebar, setSidebar] = useState(false);

  return (
    <StateContext.Provider
      value={{
        themeBG,
        ThemeBackground,
        setThemeBG,
        ThemeShapes,
        setThemeShape,
        themeBorder,
        themeShape,

        sidebar,
        setSidebar,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
