import Image from "next/image";
import { Plant } from "../helpers/types";
import styles from "./main.module.scss";
import placeholder from "../../public/placeholder.png";

export default function MainContent({
  plants
} : {
  plants: Plant[]
}) {

  return (
    <>
     <div className={styles.mainContentWrapper}>
      <div className={styles.cardsWrapper}>
        {plants.map((plant, i) => (
          <a href={`/plants/${plant.id}`} key={i}>
            <div className={styles.card}  >
              <div className={styles.cardContent}>
                  <div className={styles.cardImage} 
                    style={{backgroundImage: `url(${(plant.images && plant.images.length > 0 ? plant.images[0] : placeholder.src)})`}}>
                  </div>
                  <div className={styles.cardInfo}>
                    <h3>{plant.common_name}</h3>
                    <p className="italic">({plant.scientific_name})</p>
                    <p>{plant.classification}</p>
                  </div>
              </div>
            </div>
          </a>
        ))};
        </div>
      </div>
    </>
  );
}
