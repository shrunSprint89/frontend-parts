/**
 * Returns the first few words of a string.
 * @param str The string to extract words from.
 * @param count The number of words to extract.
 * @returns The first few words of the string.
 * @example
 * getFirstFewWords("Hello world, this is a test.", 3); // "Hello world, this..."
 * getFirstFewWords("Hello world, this is a test.", 1); // "Hello..."
 */
export function getFirstFewWords(str: string, count: number) {
  const regex = new RegExp(`(\\S+\\s*){1,${count}}`);
  const match = str.match(regex);
  return match ? match[0].trim().concat("...") : "";
}
