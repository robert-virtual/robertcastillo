import Head from "next/head";
import { useState } from "react";
import Chip from "../components/chip";

export default function Home() {
  const [proyects] = useState([
    {
      title: "Aplicacion de descarga de musica y video",
      category: "Aplicacion Web",
      link: "https://music.robertcastillo.me",
    },
    {
      title: "Aplicacion de notas con autenticacion a traves de google",
      category: "Aplicacion Web",
      link: "https://notes.robertcastillo.me",
    },
    {
      title: "clon de netflix con autenticacion a traves de google",
      category: "Aplicacion Web",
      link: "https://netflixclone.robertcastillo.me",
    },
    {
      title: "Aplicacion de venta de recargas claro",
      category: "Aplicacion movil",
      link: "https://recargas.robertcastillo.me",
    },
    {
      title: "Reproductor de musica",
      category: "Aplicacion movil",
      link: "https://player.robertcastillo.me",
    },
    {
      title: "Aplicaciones de fotos",
      category: "Aplicacion movil",
      link: "https://fotos.robertcastillo.me",
    },
  ]);
  const [category, setCategory] = useState("");

  return (
    <div>
      <Head>
        <title>Robert Castillo</title>
        <meta name="description" content="portafolio personal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-4 ">
        <span className="text-9xl text-center block">Bienvenido</span>
        <h1 className="text-5xl bg-white text-blue-500 text-center">
          Roberto Castillo Portafolio
        </h1>
        <span className="text-gray-400">5 de febrero de 2022</span>

        <div className="bg-white p-2 shadow-lg rounded-md">
          <header className="my-2 flex items-center justify-between">
            <h2 className="text-3xl text-blue-500 my-10 bg-white">Proyectos</h2>
            {category && (
              <div className="flex items-center justify-end w-1/4">
                <Chip onClick={() => setCategory("")}>Todos</Chip>
              </div>
            )}
          </header>

          <div
            className="grid gap-5 place-items-center"
            style={{
              gridTemplateColumns: "repeat(auto-fit,minmax(384px,1fr))",
            }}
          >
            {proyects.map(
              (p) =>
                p.category.includes(category) && (
                  <article
                    key={p.link}
                    className="border-[1px] bg-white border-gray-400 hover:border-blue-500 group border-solid rounded-md p-2 w-96 hover:shadow-md h-36 flex flex-col justify-around"
                  >
                    <a
                      href={p.link}
                      className="text-2xl text-gray-600 group-hover:text-blue-500"
                    >
                      {p.title}
                    </a>
                    <Chip
                      selected={category == p.category}
                      onClick={() => {
                        if (p.category == category) {
                          return setCategory(() => "");
                        }
                        setCategory(() => p.category);
                      }}
                    >
                      {p.category}
                    </Chip>
                  </article>
                )
            )}
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
