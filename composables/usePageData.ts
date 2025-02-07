export default async function usePageData(pathSuffix?: string) {
  const route = useRoute();

  const { data: pageData } = await useAsyncData(route.path, () => {
    const path = pathSuffix ? `${route.path}/${pathSuffix}` : route.path;
    console.log(`Getting content for path ${path}`);
    return queryCollection<"docs">("docs").path(`${path}`).first();
  });

  return pageData;
}
