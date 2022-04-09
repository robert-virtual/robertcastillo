import { SideBar } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid" style={{ gridTemplateColumns: "auto 1fr" }}>
      <SideBar />
      <div className="main bg-gray-100 p-2 h-screen overflow-auto">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
