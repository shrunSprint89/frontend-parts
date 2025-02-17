import MiniSearch from "minisearch";

export const useSearchContent = async () => {
  const miniSearch = new MiniSearch<QuerySearchResult>({
    fields: ["title", "content"],
    storeFields: ["title", "content"],
    searchOptions: {
      prefix: true,
      fuzzy: 0.2,
      boost: { title: 2 },
    },
  });
  const { data } = await useAsyncData(
    "search",
    (): Promise<QuerySearchResult[]> =>
      queryCollectionSearchSections("docs", {
        ignoredTags: ["style", "script", "meta"],
      }),
    {
      lazy: true,
      default: () => [],
    }
  );
  miniSearch.addAll(toValue(data.value ?? []));
  return { miniSearch };
};
