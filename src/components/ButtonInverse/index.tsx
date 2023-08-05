import "./styles.css";

type props = {
  text: string;
}

export default function ButtonInverse({text}: props) {
  return (
    <div className="dsc-btn dsc-btn-white">
      {text}
    </div>
  );
}
