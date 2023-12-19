import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const total = photos.length;

  // Increments currCardIdx state by 1
  function goForward() {
    if (currCardIdx < photos.length - 1) {
      setCurrCardIdx(currCardIdx + 1);
    }
  }

  // Decrements currCardIdx state by 1
  function goBackward() {
    if (currCardIdx > 0) {
      setCurrCardIdx(currCardIdx - 1);
    }
  }

  const renderCard = () => {
    const currCard = photos[currCardIdx];
    if (currCard) {
      return (
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
      );
    }
    return null;
  };

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <span 
          role="button" 
          onClick={goBackward} 
          disabled={currCardIdx === 0}
        >
          ⬅️
        </span>

        {renderCard()}

        <span
          role="button"
          onClick={goForward}
          disabled={currCardIdx === photos.length - 1}
        >
          ➡️
        </span>
      </div>
    </div>
  );
}

export default Carousel;
