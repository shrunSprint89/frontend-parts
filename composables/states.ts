import { ThemeValue, type AppTheme } from "~/types/custom-types";

export const useThemeState = () =>
  useState<AppTheme>("theme", () => ({
    name: ThemeValue.system,
    value: "system",
  }));
export const useAppState = () => {
  const currentTheme = useThemeState();

  const setTheme = ({ value, name }: AppTheme) => {
    currentTheme.value = { value, name };
  };

  return {
    // States
    currentTheme,

    // Mutations
    setTheme,
  };
};
