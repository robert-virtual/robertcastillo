import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [proyects] = useState([
    {
      title: "Aplicacion de descarga de musica y video",
      category: "Aplicacion Web",
      link: "https://music.robertcastillo.me",
    },
    {
      title: "Aplicacion de notas con autenticacion a traves de google",
      category: "Aplicacion web",
      link: "https://notes.robertcastillo.me",
    },
    {
      title: "clon de netflix con autenticacion a traves de google",
      category: "Aplicacion web",
      link: "https://notes.robertcastillo.me",
    },
    {
      title: "Aplicacion de venta de recargas claro",
      category: "Aplicacion movil",
      link: "https://notes.robertcastillo.me",
    },
    {
      title: "Reproductor de musica",
      category: "Aplicacion movil",
      link: "https://notes.robertcastillo.me",
    },
    {
      title: "Aplicaciones de fotos",
      category: "Aplicacion movil",
      link: "https://notes.robertcastillo.me",
    },
  ]);

  return (
    <div>
      <Head>
        <title>Robert Castillo</title>
        <meta name="description" content="portafolio personal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="shadow-md p-2 text-right sticky top-0">
        <h1 className="text-5xl text-blue-500 text-center">
          Roberto Castillo Portafolio
        </h1>
        <span className="text-gray-400">2/5/2022</span>
      </nav>
      <main className="p-4">
        <span className="text-5xl">Bienvenido</span>
        <h2 className="text-3xl text-blue-500 my-10">Proyectos</h2>

        <div
          className="grid gap-5 place-items-center"
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(384px,1fr))" }}
        >
          {proyects.map((p) => (
            <article
              key={p.link}
              className="border-[1px] border-gray-400 hover:border-blue-500 group border-solid rounded-md p-2 w-96 hover:shadow-md h-36 flex flex-col justify-around"
            >
              <a
                href={p.link}
                className="text-2xl text-gray-500 group-hover:text-blue-500"
              >
                {p.title}
              </a>

              <span className="text-gray-700 bg-gray-100 p-1 rounded-xl w-fit text-center cursor-pointer border-gray-400 border-solid border-[1px] hover:bg-gray-50 hover:brightness-90">
                {p.category}
              </span>
            </article>
          ))}
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
