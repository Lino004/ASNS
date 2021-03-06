import * as allPageFr from './fr/import';
import * as allPageEn from './en/import';

const generalTraductionFr = [];
const generalTraductionEn = [];

function allTraduction(allTraduction, lang) {
  Object.keys(allTraduction).forEach((key) => {
    if (lang === 'fr') generalTraductionFr[key] = allTraduction[key];
    if (lang === 'en') generalTraductionEn[key] = allTraduction[key];
  });
}
// Pour les futurs modules il faut créer le fichier de translate import, l'import et
// appeller la fonction en dessous avec en parametre la liste de toutes les translate
allTraduction(allPageFr.PAGES, 'fr');
allTraduction(allPageEn.PAGES, 'en');

export const TRANSLATE = {
  fr: generalTraductionFr,
  en: generalTraductionEn,
};
