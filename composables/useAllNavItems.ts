export default async function useAllNavItems() {
  const { data } = await useAsyncData("navigation", () =>
    queryCollectionNavigation("docs", ["navTitle", "navOrder", "path"])
  );
  return data.value;
}
