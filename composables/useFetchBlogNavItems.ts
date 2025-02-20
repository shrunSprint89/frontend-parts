import type { ContentNavigationItem } from "@nuxt/content";

export default function useFetchBlogNavItems() {
  const { blogNavState, setBlogNavState } = useAppState();
  const { log } = useLogger();
  useAsyncState(
    () => {
      setBlogNavState({
        nav: [],
        isLoading: true,
        isReady: false,
        isError: false,
      });
      return useAllNavItems().then((items) => {
        log(LogLevel.DEBUG, `useBlogNavItems: ${JSON.stringify(items)}`);
        const filteredItems: ContentNavigationItem[] | null = items
          ?.slice()
          .filter(
            (item: ContentNavigationItem) =>
              item.path.includes(BLOG_ROUTE_PATH) &&
              (!item.page || item.page !== false)
          )
          .at(0)?.children;
        log(
          LogLevel.DEBUG,
          `useBlogNavItems -filteredItems: ${JSON.stringify(filteredItems)}`
        );
        return filteredItems;
      });
    },
    [],
    {
      immediate: true,
      resetOnExecute: true,
      onSuccess: (data) => {
        setBlogNavState({
          nav: data ?? [],
          isLoading: false,
          isReady: true,
          isError: false,
        });
      },
      onError: (error) => {
        console.error("Error fetching blog nav items", error);
        setBlogNavState({
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
    blogNavState,
  };
}
