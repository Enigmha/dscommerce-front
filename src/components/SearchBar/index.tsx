import { useState } from 'react';
import './styles.css';

type Props ={
  onSearch: Function;
}


export default function SeachBar({onSearch}: Props){

  const [text, setText] = useState("");

  function handleChange(event: any){
    setText(event.target.value);
  }

  function handleReseteClick(){
    setText("");
    onSearch(text);
  }

  function handleSubmit (event: any) {
    event.preventDefaut();
    onSearch(text);
  }

    return (
        <form className="dsc-search-bar" onSubmit={handleSubmit}>
          <button type="submit">🔎︎</button>
          <input
              value={text}
              type="text" 
              placeholder="Nome do Produto"
              onChange={handleChange} 
          />
          <button onClick={handleReseteClick}>❌</button>
        </form>
    );
}