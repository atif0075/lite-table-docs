/**
 * Lightweight i18n plugin
 * 
 * @author Linmasahiro
 * @email  k80092@gmail.com
 */

import { ref, provide, inject } from "vue";

/**
 * Start a i18n Object
 *
 * @param i18nConfig Language JSON
 * @returns
 */
const createI18n = (i18nConfig) => ({
  /**
   * Locale file name
   */
  locale: ref(i18nConfig.locale),

  /**
   * Messages JSON Object
   */
  messages: i18nConfig.messages,

  /**
   * Print message
   *
   * @param key
   */
  $t(key) {
    return (this.messages[this.locale.value][key]) ? this.messages[this.locale.value][key] : key;
  }
});

/**
 * i18n symbol
 */
const i18nSymbol = Symbol();

/**
 * Provide i18n object to symbol
 *
 * @param i18nConfig Language JSON
 */
export function provideI18n(i18nConfig) {
  const i18n = createI18n(i18nConfig);
  provide(i18nSymbol, i18n);
}

/**
 * Injection i18n symbol to component
 */
export function useI18n() {
  const i18n = inject(i18nSymbol);
  if (!i18n) throw new Error("No i18n provided.");

  return i18n;
}