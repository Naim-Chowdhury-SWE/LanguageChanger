import { useState } from 'react';

const translations = {
  Swedish: {
    1: {
      dishname: "Blandad Sushi",
      description: "Blandad Sushi med många olika typer av sushibitar.",
    },
    2: {
      dishname: "Lax & Rullar",
      description: "Blandad Sushi som innehåller Rullar och Lax.",
    },
  },
  English: {
    1: {
      dishname: "Mixed Sushi",
      description: "Mixed Sushi with a variety of sushi pieces.",
    },
    2: {
      dishname: "Salmon & Rolls",
      description: "Mixed Sushi containing Rolls and Salmon.",
    },
  },
  Spanish: {
    1: {
      dishname: "Sushi Variado",
      description: "Sushi variado con una variedad de piezas de sushi.",
    },
    2: {
      dishname: "Salmón y Rollos",
      description: "Sushi variado que contiene rollos y salmón.",
    },
  },
  French: {
    1: {
      dishname: "Sushi Mixte",
      description: "Sushi mixte avec une variété de morceaux de sushi.",
    },
    2: {
      dishname: "Saumon & Rouleaux",
      description: "Sushi mixte contenant des rouleaux et du saumon.",
    },
  },
};

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState('Swedish');

  const getSushiDishDetails = (id) => {
    const dishTranslation = translations[selectedLanguage][id];
    return {
      dishname: dishTranslation.dishname,
      description: dishTranslation.description,
    };
  };

  const Sushi = {
    language: translations, // Assign the entire translations object to the language property
    id: "sushi",
    name: "Sushi Meny",
    dishes: [
      {
        id: 1,
        pieces: [7, 8, 9, 11, 13, 14, 16, 20],
        prices: [89, 99, 109, 129, 149, 159, 179, 219],
        images: [],
        ...getSushiDishDetails(1),
      },
      {
        id: 2,
        pieces: [8, 10, 12],
        prices: [99, 119, 139],
        images: [],
        ...getSushiDishDetails(2),
      },
    ],
  };

  return (
    <>
      <h1 className="text-3xl text-center text-white font-bold underline">
        Hello world!
      </h1>
      <select
        name=""
        id=""
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        {Object.keys(translations).map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
      <div className="bg-orange-800 text-white">
        <h2 className="text-2xl font-bold">{Sushi.name}</h2>
        {Sushi.dishes.map((dish) => (
          <div key={dish.id}>
            <h3>{dish.dishname}</h3>
            <p>{dish.description}</p>
            {/* Add additional rendering logic for other dish details if needed */}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
