export default function Grid({ children }) {
  return (
    <div
      className="grid gap-5 place-items-center"
      style={{
        gridTemplateColumns: "repeat(auto-fit,minmax(384px,1fr))",
      }}
    >
      {children}
    </div>
  );
}
