import "./App.css";
import Profile from "./profil/profil";
import Yasminephoto from "../src/assets/yass.jpeg";

function App() {
  const handleName = (name) => alert(`My name is : ${name}`);
  return (
    <div>
      <Profile
        fullName="Nour Yasmine Hanachi"
        bio="i'm 23 years old girl, Living in Tunisia But i'm always travelling around the world"
        profession="Photographer"
        handleName={handleName}
      >
        <img src={Yasminephoto} alt="Yasmine Photo" width="300px" />
      </Profile>
    </div>
  );
}

export default App;
