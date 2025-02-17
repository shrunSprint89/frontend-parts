export function useLogger() {
  const { isLoggingEnabled } = useAppState();
  const log = (level: LogLevel, ...args: unknown[]) => {
    //console.log("Is logging enabled:", isLoggingEnabled.value);
    //console.log("Log level:", level);
    //console.log("Log args:", args);
    if (!isLoggingEnabled.value) return;

    switch (level) {
      case LogLevel.DEBUG:
        console.log(...args);
        break;
      case LogLevel.INFO:
        console.info(...args);
        break;
      case LogLevel.WARN:
        console.warn(...args);
        break;
      case LogLevel.ERROR:
        console.error(...args);
        break;
    }
  };

  return {
    log,
  };
}
