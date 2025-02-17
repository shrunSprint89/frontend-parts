import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  const { hasVisitedHomepage, setHasVisitedHomepage } = useAppState();
  const { log } = useLogger();

  nuxtApp.hook("app:beforeMount", () => {
    if (!hasVisitedHomepage.value) {
      // Your code to run on the first visit to the homepage goes here
      log(LogLevel.DEBUG, "First time visiting the homepage.");
      setHasVisitedHomepage(true);
      useFetchAppNavItems();
      useFetchArticlesNavItems();
    } else {
      log(LogLevel.DEBUG, "Not the first time visiting the homepage.");
    }
  });
});
