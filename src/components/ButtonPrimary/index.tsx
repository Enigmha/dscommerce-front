import "./styles.css";

type props = {
  text: string;
}


export default function ButtonPrimary({text} : props) {
  return (

      <div className="dsc-btn dsc-btn-blue">
        {text }
      </div>

  );
}
