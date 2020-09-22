import React from 'react'
import {I18nManager} from 'react-native'
import * as RNLocalize from "react-native-localize";
import i18n from "i18n-js";
import _ from "lodash"; // Use for caching/memoize for better performance

const translationGetters = {
    zh: () => require("./zh.json"),
    en: () => require("./en.json")
}
  
// export const t = _.memoize(
//     (key, config) => i18n.t(key, config),
//     (key, config) => (config ? key + JSON.stringify(config) : key)
// );

export const setI18nConfig = () => {
    const fallback = { languageTag: "en", isRTL: false };
    const { languageTag, isRTL } = RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) || fallback;
    // t.cache.clear();
    I18nManager.forceRTL(isRTL);
    i18n.translations = { [languageTag]: translationGetters[languageTag]() };
    i18n.locale = languageTag;
}

export const t = i18n.t