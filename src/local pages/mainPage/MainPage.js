import "./mainPage.css";
import back1 from "../images/back1.jpg";
import Header from "../header/Header1";

function MainPage() {
  return (
    <div
      className="MainPge"
      style={{ backgroundImage: `url(${back1})`, backgroundSize: "cover" }}
    >
      <div className="row">
        <a className="logo">LOGO</a>
      </div>
      <div>
        <Header />
      </div>
      <h1 style={{ color: "white" }}>Taking Your Business To Next Level</h1>
      <h2 style={{ color: "white" }}>
        I'm a paragraph. Click here to add your own text and edit me. Let your
        users get to know you.
      </h2>
      <button> Read More </button>
      <button> Join Now </button>
    </div>
  );
}

export default MainPage;
