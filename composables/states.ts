const useThemeState = () =>
  useState<AppTheme>("theme", () => ({
    name: ThemeValue.system,
    value: "system",
  }));
const useNavState = () =>
  useState<NavState>("nav", () => ({
    nav: [],
    isLoading: false,
    isReady: false,
    isError: false,
  }));
const useArticlesNavState = () =>
  useState<NavState>("articlesNav", () => ({
    nav: [],
    isLoading: false,
    isReady: false,
    isError: false,
  }));
const useBlogNavState = () =>
  useState<NavState>("blogNav", () => ({
    nav: [],
    isLoading: false,
    isReady: false,
    isError: false,
  }));
const useAboutNavState = () =>
  useState<NavState>("aboutNav", () => ({
    nav: [],
    isLoading: false,
    isReady: false,
    isError: false,
  }));
export const useAppState = () => {
  const currentTheme = useThemeState();
  const navState = useNavState();
  const articlesNavState = useArticlesNavState();
  const blogNavState = useBlogNavState();
  const aboutNavState = useAboutNavState();
  const hasVisitedHomepage = useState("hasVisitedHomepage", () => false);
  const searchValue = useState("searchValue", () => "");
  const isLoggingEnabled = useState(
    "isLoggingEnabled",
    () => process.env.NODE_ENV === "development"
  );

  const setTheme = ({ value, name }: AppTheme) => {
    currentTheme.value = { value, name };
  };
  const setNavState = (state: NavState) => {
    navState.value = { ...state };
  };
  const setArticlesNavState = (state: NavState) => {
    articlesNavState.value = { ...state };
  };
  const setBlogNavState = (state: NavState) => {
    blogNavState.value = { ...state };
  };
  const setAboutNavState = (state: NavState) => {
    aboutNavState.value = { ...state };
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
    blogNavState,
    aboutNavState,
    articlesNavState,
    hasVisitedHomepage,
    searchValue,
    isLoggingEnabled,

    // Mutations
    setTheme,
    setNavState,
    setArticlesNavState,
    setBlogNavState,
    setAboutNavState,
    setHasVisitedHomepage,
    setSearchValue,
    setIsLoggingEnabled,
  };
};
