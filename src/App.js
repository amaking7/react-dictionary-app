import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/amaking7/react-dictionary-app"
              target="_blank"
            >
              Open-source code
            </a>{" "}
            by Amanda
          </small>
        </footer>
      </div>
    </div>
  );
}
