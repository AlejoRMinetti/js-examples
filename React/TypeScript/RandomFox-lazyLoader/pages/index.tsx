import { useState } from "react";
import type { MouseEventHandler } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { useLocalStorage } from 'usehooks-ts'

// Ejemplo utilizando una librería sin tipos.
// Realmente no hace falta su uso.
import { random } from "lodash";

import { LazyImage } from "@/components/RandomFox";

// generate simple unique id
const generateId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

// random number from 1 to 122
const myRandom = () => random(1, 122);

const Home: NextPage = () => {
  const [images, setImages] = useState<Array<IFoxImageItem>>([]);
  const [isDarkTheme, setDarkTheme] = useLocalStorage('darkTheme', true)

  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
    const id = generateId();
    const url = `https://randomfox.ca/images/${myRandom()}.jpg`;
    setImages([...images, { id, url }]);
  };

  const toggleTheme = () => {
    setDarkTheme((prevValue: boolean) => !prevValue)
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <button onClick={toggleTheme}>
          {`The current theme is ${isDarkTheme ? `dark` : `light`}`}
        </button>
        <div className="m-4">
          <button
            onClick={addNewFox}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Add new fox
          </button>
        </div>
        {images.map(({ id, url }, index) => (
          <div className="p-4" key={id}>
            <LazyImage
              src={url}
              width="320"
              height="auto"
              className="mx-auto rounded-md bg-gray-300"
              onClick={() => {
                console.log("holi!");
              }}
              onLazyLoad={(img) => {
                console.log(`Image #${index + 1} cargada. Nodo:`, img);
              }}
            />
          </div>
        ))}
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
