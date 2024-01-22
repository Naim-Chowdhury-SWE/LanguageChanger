import { useState } from 'react';

const translationsSushi = {
  Swedish: {
    1: {
      dishname: ["Blandad Sushi"],
      description: ["Blandad Sushi med många olika typer av sushibitar."],
    },
    2: {
      dishname: ["Lax & Rullar"],
      description: ["Blandad Sushi som innehåller Rullar och Lax."],
    },
  },
  English: {
    1: {
      dishname: ["Mixed Sushi"],
      description: ["Mixed Sushi with a variety of sushi pieces."],
    },
    2: {
      dishname: ["Salmon & Rolls"],
      description: ["Mixed Sushi containing Rolls and Salmon."],
    },
  },
  Spanish: {
    1: {
      dishname: ["Sushi Variado"],
      description: ["Sushi variado con una variedad de piezas de sushi."],
    },
    2: {
      dishname: ["Salmón y Rollos"],
      description: ["Sushi variado que contiene rollos y salmón."],
    },
  },
  French: {
    1: {
      dishname: ["Sushi Mixte"],
      description: ["Sushi mixte avec une variété de morceaux de sushi."],
    },
    2: {
      dishname: ["Saumon & Rouleaux"],
      description: ["Sushi mixte contenant des rouleaux et du saumon."],
    },
  },
};

const translationsNorimaki = {
  Swedish: {
    1: {
      dishname: ["California roll", "California roll Special"],
      description: ["Inside-Out sjögräsrulle med avocado, gurka, crabbstick och chilimajo", "Inside-Out sjögräsrulle som innehåller avocado, gurka, crabbstick. Toppas med Halstrad lax samt chilimajo"],
    },
    2: {
      dishname: ["Standard roll"],
      description: ["Inside-Out sjögräsrulle med lax, gurka, crabbstick"],
    },
  },
  English: {
    1: {
      dishname: ["California roll", "California roll Special"],
      description: ["Inside-Out seaweed roll with avocado, cucumber, crabstick, and chili mayo", "Inside-Out seaweed roll containing avocado, cucumber, crabstick. Topped with seared salmon and chili mayo"],
    },
    2: {
      dishname: ["Standard roll"],
      description: ["Inside-Out seaweed roll with salmon, cucumber, crabstick"],
    },
  },
  Spanish: {
    1: {
      dishname: ["California roll", "California roll Special"],
      description: ["Roll de alga invertida con aguacate, pepino, palitos de cangrejo y mayonesa de chile", "Roll de alga invertida que contiene aguacate, pepino, palitos de cangrejo. Cubierto con salmón a la parrilla y mayonesa de chile"],
    },
    2: {
      dishname: ["Standard roll"],
      description: ["Roll de alga invertida con salmón, pepino, palitos de cangrejo"],
    },
  },
  French: {
    1: {
      dishname: ["California roll", "California roll Special"],
      description: ["Rouleau d'algue inversé avec avocat, concombre, bâtonnets de crabe et mayonnaise au piment", "Rouleau d'algue inversé contenant de l'avocat, du concombre, des bâtonnets de crabe. Garni de saumon grillé et de mayonnaise au piment"],
    },
    2: {
      dishname: ["Standard roll"],
      description: ["Rouleau d'algue inversé avec saumon, concombre, bâtonnets de crabe"],
    },
  },
};
const Menu = ({ name, dishes, translations, getDishDetails }) => {
  return (
    <div className="bg-orange-800 text-white">
      <h2 className="text-2xl font-bold">{name}</h2>
      {dishes.map((dish) => (
        <div key={dish.id}>
          <h3>{dish.dishname.map((name) => name)}</h3>
          <p>{dish.description.map((desc) => desc)}</p>
          <div>
          {dish.pieces.map((piece) => piece)} || {dish.types.map((type) => type)}
          </div>
        </div>
      ))}
    </div>
  );
};

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('Swedish');

  const getDishDetails = (translations, id) => {
    const dishTranslation = translations[selectedLanguage][id];
    return {
      dishname: dishTranslation.dishname,
      description: dishTranslation.description,
    };
  };

  return (
    <>
      <h1 className="text-6xl text-center text-white font-bold underline">
        Miyabi
      </h1>
      <select
        name=""
        id=""
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        {Object.keys(translationsSushi).map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>

      <Menu
        name="Sushi Meny"
        dishes={[
          {
            id: 1,
            pieces: [7, 8, 9, 11, 13, 14, 16, 20],
            prices: [89, 99, 109, 129, 149, 159, 179, 219],
            images: [],
            ...getDishDetails(translationsSushi, 1),
          },
          {
            id: 2,
            pieces: [8, 10, 12],
            prices: [99, 119, 139],
            images: [],
            ...getDishDetails(translationsSushi, 2),
          },
        ]}
        translations={translationsSushi}
        getDishDetails={getDishDetails}
      />

      <Menu
        name="Norimaki Meny"
        dishes={[
          {
            id: 1,
            types: ["Normal", "Special"],
            prices: [129, 149],
            images: [],
            ...getDishDetails(translationsNorimaki, 1),
          },
          {
            id: 2,
            types: [],
            prices: [105],
            images: [],
            ...getDishDetails(translationsNorimaki, 2),
          },
        ]}
        translations={translationsNorimaki}
        getDishDetails={getDishDetails}
      />
    </>
  );
}

export default App;