import "./styles.css";
import Acampamentos from "./components/Acampamentos";

export default function App() {
  const camps = [
    { name: "Acampamento Jovens Com Cristo", url: "../pagDetalhes/camp1.html" },
    { name: "Acampamento Lovers", url: "../pagDetalhes/camp2.html" },
    { name: "Acampamento Auuuuuuuuu", url: "../pagDetalhes/camp3.html" },
    { name: "Acampamento Crystal Lake", url: "../pagDetalhes/camp4.html" }
  ];
  return (
    <section>
      <div id="retTopo">
        <div id="textoTopo">SEJA BEM VINDO AO CAMP CRISTO!</div>
      </div>
      <div id="textoMeio">
        Aqui você encontrará todas as informações necessárias para se situar nos
        próximos eventos. Como local, datas, horários de saída e chegada.
      </div>
      <Acampamentos camps={camps} />
      <div id="fundoFoto">
        <img src={require("../public/img/fundo.png")} alt="teste" srcSet="" />
      </div>
    </section>
  );
}
