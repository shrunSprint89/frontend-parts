import type { ContentNavigationItem } from "@nuxt/content";

export default function useFetchAboutNavItems() {
  const { aboutNavState, setAboutNavState } = useAppState();
  const { log } = useLogger();
  useAsyncState(
    () => {
      setAboutNavState({
        nav: [],
        isLoading: true,
        isReady: false,
        isError: false,
      });
      return useAllNavItems().then((items) => {
        log(LogLevel.DEBUG, `useFetchAboutNavItems: ${JSON.stringify(items)}`);
        const filteredItems: ContentNavigationItem[] | null = items
          ?.slice()
          .filter(
            (item: ContentNavigationItem) =>
              item.path.includes(ABOUT_ROUTE_PATH) &&
              (!item.page || item.page !== false)
          )
          .at(0)?.children;
        log(
          LogLevel.DEBUG,
          `useFetchAboutNavItems -filteredItems: ${JSON.stringify(filteredItems)}`
        );
        return filteredItems;
      });
    },
    [],
    {
      immediate: true,
      resetOnExecute: true,
      onSuccess: (data) => {
        setAboutNavState({
          nav: data ?? [],
          isLoading: false,
          isReady: true,
          isError: false,
        });
      },
      onError: (error) => {
        console.error("Error fetching about nav items", error);
        setAboutNavState({
          nav: [],
          isLoading: false,
          isReady: false,
          isError: true,
        });
      },
      shallow: true,
    }
  );
  return {
    aboutNavState,
  };
}
