import React from "react";
import ar from "../images/flags/morocco.png";
import fr from "../images/flags/france.png";
import en from "../images/flags/united-states.png";

function Flag({ src, w }) {

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const Flg = () => {
    switch (src) {
      case "ar":
        return <img src={ar} alt="ar" width={w} />;
      case "fr":
        return <img src={fr} alt="ar" width={w} />;
      case "en":
        return <img src={en} alt="ar" width={w} />;
      default:
        return <img src={ar} alt="ar" width={w} />;
    }
  };

  return (
    <div style={style} > <Flg /> </div>
  );
}

export default Flag;
