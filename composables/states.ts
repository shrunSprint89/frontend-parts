import type { ContentNavigationItem } from "@nuxt/content";
interface NavState {
  nav: ContentNavigationItem[];
  isLoading: boolean;
  isReady: boolean;
  isError: boolean;
}

export const useThemeState = () =>
  useState<AppTheme>("theme", () => ({
    name: ThemeValue.system,
    value: "system",
  }));
export const useNavState = () =>
  useState<NavState>("nav", () => ({
    nav: [],
    isLoading: false,
    isReady: false,
    isError: false,
  }));

export const useArticlesNavState = () =>
  useState<NavState>("articlesNav", () => ({
    nav: [],
    isLoading: false,
    isReady: false,
    isError: false,
  }));
export const useAppState = () => {
  const currentTheme = useThemeState();
  const navState = useNavState();
  const articlesNavState = useArticlesNavState();
  const hasVisitedHomepage = useState("hasVisitedHomepage", () => false);
  const searchValue = useState("searchValue", () => "");
  const isLoggingEnabled = useState("isLoggingEnabled", () => true);

  const setTheme = ({ value, name }: AppTheme) => {
    currentTheme.value = { value, name };
  };
  const setNavState = (state: NavState) => {
    navState.value = { ...state };
  };
  const setArticlesNavState = (state: NavState) => {
    articlesNavState.value = { ...state };
  };
  const setHasVisitedHomepage = (value: boolean) => {
    hasVisitedHomepage.value = value;
  };
  const setSearchValue = (value: string) => {
    searchValue.value = value;
  };
  const setIsLoggingEnabled = (value: boolean) => {
    isLoggingEnabled.value = value;
  };

  return {
    // States
    currentTheme,
    navState,
    articlesNavState,
    hasVisitedHomepage,
    searchValue,
    isLoggingEnabled,

    // Mutations
    setTheme,
    setNavState,
    setArticlesNavState,
    setHasVisitedHomepage,
    setSearchValue,
    setIsLoggingEnabled,
  };
};
