import "./ErrorMessage.css";
import noResults from "../../assets/no-results.png";

const ErrorMessage = ({ message }) => {
  return (
    <div className="errormessage__container">
      <p className="errormessage__text">{message}</p>
      <img src={noResults} alt="Goku confused" className="errormessage__img" />
    </div>
  );
};

export default ErrorMessage;
