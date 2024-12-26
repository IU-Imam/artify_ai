import ImageGen from "./components/ImageGen";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <h1 className="flex text-2xl justify-center text-slate-600">
        Image Generator with <span className="text-3xl mx-4">ARTIFY AI</span>
      </h1>
      <ImageGen />
    </>
  );
}

export default App;
