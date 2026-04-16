import Image from "next/image";
import { Plant, Weeds } from "../types";
import styles from "./main.module.scss";
import placeholder from "../../../public/placeholder.png";

export default function MainContent({
  plants, weeds
} : {
  plants: Plant[]; weeds: Weeds[]
}) {

  
  return (
    <>
     <div className={styles.mainContentWrapper}>
      <div className={styles.cardsWrapper}>
        {plants.map((plant, i) => (
          <div className={styles.card} key={i}
            style={{backgroundImage: `url(${(plant.images ? plant.images[0] : placeholder.src)})`}}
          >
              {plant.common_name}
          </div>
        ))};
        </div>
      
      
      
      </div>
    
    </>
  );
}
