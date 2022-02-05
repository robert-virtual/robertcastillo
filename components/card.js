import Image from "next/image";

export default function Card({ title, link, children, image }) {
  return (
    <article className="border-[1px] bg-white border-gray-400 hover:border-blue-500 group border-solid rounded-md p-2 w-96 hover:shadow-md h-36 flex flex-col justify-around">
      <div className="flex items-center justify-around">
        {image && <Image src={image} width={100} height={100} alt={title} />}
        <a
          href={link ?? "#"}
          className="text-2xl text-gray-600 group-hover:text-blue-500"
        >
          {title}
        </a>
      </div>
      {children}
    </article>
  );
}
