export default function usePageData(pathSuffix?: string) {
  const route = useRoute();
  const { log } = useLogger();

  return useLazyAsyncData(route.path, () => {
    log(LogLevel.DEBUG, `Getting content for path ${route.path}`);
    const path = pathSuffix ? `${route.path}/${pathSuffix}` : route.path;
    log(LogLevel.DEBUG, `Getting content for path ${path}`);
    return queryCollection<"docs">("docs").path(`${path}`).first();
  });
}
