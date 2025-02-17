// @blocksort asc
export enum ThemeValue {
  aqua = "Aqua",
  autumn = "Autumn",
  coffee = "Coffee",
  corporate = "Corporate",
  cupcake = "Cupcake",
  dark = "Dark",
  dim = "Dim",
  dracula = "Dracula",
  forest = "Forest",
  garden = "Garden",
  lemonade = "Lemonade",
  light = "Light",
  lofi = "Lofi",
  nord = "Nord",
  pastel = "Pastel",
  retro = "Retro",
  system = "System",
  valentine = "Valentine",
  winter = "Winter",
}
export interface AppTheme {
  name: ThemeValue;
  value: keyof typeof ThemeValue;
}

export enum LogLevel {
  DEBUG = "DEBUG",
  INFO = "INFO",
  WARN = "WARN",
  ERROR = "ERROR",
}

export interface QuerySearchResult {
  id: string;
  title: string;
  titles: string[];
  level: number;
  content: string;
}
