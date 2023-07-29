import './styles.css';
export default function SeachBar(){
    return(
        <form className="dsc-search-bar">
          <button type="submit">🔎︎</button>
          <input type="text" placeholder="Nome do Produto" />
          <button type="reset">❌</button>
        </form>
    );
}