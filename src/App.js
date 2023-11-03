import "./styles.css";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Note />
      <Footer />
    </div>
  );
}
