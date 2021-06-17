import "./App.css";
// import NavBar from "./component/navbar";
import Photo from "./component/PhotoProfil";
import Fullname from "./component/FullName";
import Adresse from "./component/Adress";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <h1>Welcome to my first page</h1>
      <Photo />
      <Fullname />
      <Adresse />
    </div>
  );
}

export default App;
