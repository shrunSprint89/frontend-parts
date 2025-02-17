import type { ContentNavigationItem } from "@nuxt/content";
import { ARTICLES_ROUTE_PATH } from "~/constants";

export default function useFetchAppNavItems() {
  const { navState, setNavState } = useAppState();
  const { log } = useLogger();
  useAsyncState(
    () => {
      setNavState({
        nav: [],
        isLoading: true,
        isReady: false,
        isError: false,
      });
      return useAllNavItems().then((items) => {
        log(LogLevel.DEBUG, `useAppNavItems: ${JSON.stringify(items)}`);
        const filteredItems: ContentNavigationItem[] | null =
          items?.filter(
            (item: ContentNavigationItem) =>
              !item.path.includes(ARTICLES_ROUTE_PATH) &&
              (!item.page || item.page !== false) &&
              (item.navTitle || item.title)
          ) ?? [];
        log(LogLevel.DEBUG, `useAppNavItems: ${JSON.stringify(filteredItems)}`);
        return filteredItems;
      });
    },
    [],
    {
      immediate: true,
      resetOnExecute: true,
      onSuccess: (data) => {
        setNavState({
          nav: data ?? [],
          isLoading: false,
          isReady: true,
          isError: false,
        });
      },
      onError: (error) => {
        console.error("Error fetching nav items", error);
        setNavState({
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
    navState,
  };
}
