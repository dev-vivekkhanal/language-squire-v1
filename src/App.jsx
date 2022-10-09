import Header from "./components/global/Header";
import Sidebar from "./components/global/Sidebar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="cursor-default font-roboto">
      <Header />
      <div>
        <Sidebar />
        <HomePage />
      </div>
    </div>
  );
}

export default App;
