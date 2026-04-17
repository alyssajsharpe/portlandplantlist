"use client"
import Image from "next/image";
import styles from "./carousel.module.scss";
import useEmblaCarousel from 'embla-carousel-react'
import placeholder from "../../../public/placeholder.png";
import { Plant } from "@/helpers/types";

export default function Carousel({
  plant
}:{
  plant: Plant
}) {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })
  // const goToPrev = () => emblaApi?.goToPrev()
  // const goToNext = () => emblaApi?.goToNext()

  return (
    <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={emblaRef}>
          <div className={styles.embla__container}>
            {plant.images && plant.images.length > 0 ? (
              plant.images.map((image, i) => (
                <div className={styles.embla__slide} key={i}>
                  <Image
                    src={image}
                    height={400}
                    width={400}
                    alt={`Picture of ${plant.scientific_name}`}
                  />
                </div>
              ))
            ) : (
              <div className={styles.embla__slide}>
                <Image
                  src={placeholder}
                  height={400}
                  width={400}
                  alt="Placeholder image"
                />
              </div>
            )}
          </div>
        </div>

          {/* <button className="embla__prev" onClick={goToPrev}>
            Scroll to prev
          </button>
          <button className="embla__next" onClick={goToNext}>
            Scroll to next
          </button> */}
    </div>
  );
}
