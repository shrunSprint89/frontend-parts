import type { ContentNavigationItem } from "@nuxt/content";
import { ARTICLES_ROUTE_PATH } from "~/constants";

export default function useFetchArticlesNavItems() {
  const { articlesNavState, setArticlesNavState } = useAppState();
  const { log } = useLogger();
  useAsyncState(
    () => {
      setArticlesNavState({
        nav: [],
        isLoading: true,
        isReady: false,
        isError: false,
      });
      return useAllNavItems().then((items) => {
        log(LogLevel.DEBUG, `useArticlesNavItems: ${JSON.stringify(items)}`);
        const filteredItems: ContentNavigationItem[] | null = items
          ?.filter(
            (item: ContentNavigationItem) =>
              item.path.includes(ARTICLES_ROUTE_PATH) &&
              (!item.page || item.page !== false)
          )
          .at(0)?.children;
        log(
          LogLevel.DEBUG,
          `useArticlesNavItems -filteredItems: ${JSON.stringify(filteredItems)}`
        );
        return filteredItems;
      });
    },
    [],
    {
      immediate: true,
      resetOnExecute: true,
      onSuccess: (data) => {
        setArticlesNavState({
          nav: data ?? [],
          isLoading: false,
          isReady: true,
          isError: false,
        });
      },
      onError: (error) => {
        console.error("Error fetching nav items", error);
        setArticlesNavState({
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
    articlesNavState,
  };
}
