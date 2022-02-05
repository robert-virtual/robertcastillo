import Head from "next/head";
import { useState } from "react";
import Card from "../components/card";
import Chip from "../components/chip";
import Grid from "../components/grid";
import H2t from "../components/h2t";

export default function Home() {
  const [frameworks, setFrameworks] = useState([
    {
      name: "Next.js",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1920px-Nextjs-logo.svg.png",
    },
    {
      name: "Reactjs",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1024px-React.svg.png",
    },
    {
      name: "Vuejs",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1024px-Vue.js_Logo_2.svg.png",
    },
  ]);
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
        <div className="flex flex-col items-center">
          <span className="text-9xl text-center bg-white">Bienvenido</span>
          <h1 className="text-5xl bg-white text-blue-500 text-center">
            Roberto Castillo Portafolio
          </h1>
        </div>

        <span className="text-gray-400">5 de febrero de 2022</span>

        <div className="bg-white p-2 shadow-lg rounded-md my-10">
          <H2t>Frameworks de javascript</H2t>
          <Grid>
            {frameworks.map((f) => (
              <Card key={f.name} title={f.name} image={f.image}></Card>
            ))}
          </Grid>
        </div>

        <div className="bg-white p-2 shadow-lg rounded-md">
          <header className="my-2 flex items-center justify-between">
            <H2t>Proyectos</H2t>

            {category && (
              <div className="flex items-center justify-end w-1/4">
                <Chip onClick={() => setCategory("")}>Todos</Chip>
              </div>
            )}
          </header>

          <Grid>
            {proyects.map(
              (p) =>
                p.category.includes(category) && (
                  <Card key={p.link} title={p.title} link={p.link}>
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
                  </Card>
                )
            )}
          </Grid>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
