export default function Chip({ children, onClick, selected }) {
  return (
    <span
      onClick={onClick}
      className={
        "p-1 rounded-xl w-fit text-center cursor-pointer border-gray-400 border-solid border-[1px] hover:brightness-90 mr-2 " +
        (!selected
          ? "hover:bg-gray-50 text-gray-700 bg-gray-100 "
          : "hover:bg-black bg-black text-white")
      }
    >
      {children}
    </span>
  );
}
