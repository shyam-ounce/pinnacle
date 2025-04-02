import "./app.css";
import LeftBar from "./components/leftbar/Leftbar";
import Topbar from "./components/topbar/Topbar";
import Gallery from "./components/gallery/Gallery";

const App = () => {
  return (
    <div className="app">
      <LeftBar />
      <div className="content">
        <Topbar />
        <Gallery />
      </div>
    </div>
  );
};

export default App;
