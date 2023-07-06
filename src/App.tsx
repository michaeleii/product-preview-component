import Attribution from "./components/Attribution";
import PreviewProductCard from "./components/PreviewProductCard";

function App() {
  return (
    <div className="bg-cream w-full min-h-screen flex flex-col p-5 justify-center items-center">
      <div>
        <PreviewProductCard />
      </div>

      <Attribution />
    </div>
  );
}
export default App;