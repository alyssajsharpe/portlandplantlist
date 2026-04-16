"use client"
import Image from "next/image";
import styles from "./page.module.css";
import plantJson from "../../portland_plant_list.json";
import weedJson from "../../portland_invasive_weeds.json";
import Searchbar from "./components/Searchbar";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import { Plant, Weeds } from "./types";


export default function Home() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [weeds, setWeeds] = useState<Weeds[]>([]);

  useEffect(() => {
    setPlants(plantJson.plants);
    setWeeds(weedJson.plants);
    console.log("plants: ", plants);
    console.log("weeds: ", weeds)
  }, [plants, weeds]);


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Searchbar />
        <div className={styles.mainContainer}>
            <Sidebar />
            <MainContent plants={plants} weeds={weeds}/>
        </div>
      </main>
    </div>
  );
}
