import Image from "next/image";
import styles from "./navigation.module.scss";
import bhcpLogo from "../../../public/BHCP-Logo-2024.svg";

export default function Navigation() {
  return (
      <nav className={styles.nav}>
        <div className={styles.header}>
            <div className={styles.headerLeft}>
              <Image 
                src={bhcpLogo}
                alt="Backyard Habitat Certification Program Logo"
                width={150}
                height={100}
              />
              <h2>Portland Area Native Plants & Weeds</h2>
            </div>
            <div className={styles.headerRight}>
                <a href="/about">
                  <button className="button primary">Learn More</button>
                </a>
            </div>
        </div>
      </nav>
    );
}
