import axios from "axios";
import Head from "next/head";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

interface ICharacter {
  id: number;
  name: string;
  image: string;
}
interface Props {
  characters: ICharacter[];
  pages: number;
}
const Page: NextPage<Props> = ({ characters, pages }) => {
  const router = useRouter();

  const [page, setPage] = useState(Number(router.query.page) || 1);
  function next(n: number) {
    return () => {
      if (n < 0) {
        router.back();
      } else {
        router.push(`?page=${page + n}`);
      }
      setPage(page + n);
    };
  }

  return (
    <>
      <Head>
        <title>Vuejs</title>
      </Head>
      <h1>Vuejs</h1>
      <div
        className="grid "
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" }}
      >
        {characters.map(({ id, name, image }) => (
          <div key={id.toString()}>
            <h3>{name}</h3>
            <Image src={image} width={200} height={200} />
          </div>
        ))}
      </div>
      <div className="flex justify-end items-center gap-x-2">
        <button className="link" onClick={next(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span>previo</span>
        </button>
        <p>
          {page}/{pages}
        </p>
        <button className="link" onClick={next(1)}>
          <span>siguiente</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
export default Page;
export async function getServerSideProps(context) {
  console.log("context:", context.query.page);

  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${context.query.page || 1}`
  );

  return {
    props: {
      characters: data.results,
      ...data.info,
    },
  };
}
