import { useNavigate } from "react-router-dom";
import "./Landing.styled.css";

export default function Landing() {
  let navigate = useNavigate();
  const goToSpecializations = () => {
    const path = "/specializations";
    navigate(path);
  };

  return (
    <div className="landing-container">
      <div className="main-text">
        <p className="new-title">AM NY ELECTRIC</p>
        <p className="sub-title">Fully Licensed & Insured Electrical Contractor</p>
        <button className="main-btn" onClick={goToSpecializations}>
          SPECIALIZATIONS
        </button>
      </div>
      <img className="main-image" src="/vintage_bulb_flipped.jpg" />
    </div>
  );
}
