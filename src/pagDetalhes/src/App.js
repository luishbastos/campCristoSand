import "./styles.css";
import Toggle from "./components/Toggle";
import Weather from "./components/Weather";

export default function App() {
  return (
    <section>
      <div id="images">
        <a href="../../pagInicial/public/index.html" id="linkVoltar">
          <img
            src={require("../public/img/voltar.png")}
            alt="texto voltar"
            id="textoVoltar"
          />
          <img src={require("../public/img/seta.png")} alt="setinha" />
        </a>
      </div>
    </section>
  );
}
