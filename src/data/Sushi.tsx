//Sushi.tsx
import {translations, selectedLanguage} from "./Translations";

export const Sushi = {
  language: translations[selectedLanguage],
  id: "sushi",
  name: "Sushi Meny",
  dishes: [
    {
      id: 1,
      dishname: translations[selectedLanguage][1].dishname,
      pieces: [7, 8, 9, 11, 13, 14, 16, 20],
      prices: [89, 99, 109, 129, 149, 159, 179, 219],
      images: [],
      description: translations[selectedLanguage][1].description,
    },
    {
      id: 2,
      dishname: translations[selectedLanguage][2].dishname,
      pieces: [8, 10, 12],
      prices: [99, 119, 139],
      images: [],
      description: translations[selectedLanguage][2].description,
    },
  ],
};

console.log(selectedLanguage);
console.log(Sushi)