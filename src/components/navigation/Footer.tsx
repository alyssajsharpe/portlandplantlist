import Image from "next/image";
import styles from "./footer.module.scss";
import bhcpLogo from "../../../public/BHCP-Logo-2024.svg";
import cltLogo from "../../../public/cltLogo.png";
import baoLogo from "../../../public/baoLogo.png";

export default function Footer() {
  return (
   <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
            <div className={styles.footerLeft}>
              <Image 
                src={bhcpLogo}
                alt="Backyard Habitat Certification Program Logo"
                width={150}
                height={100}
              />
              <div className={styles.footerLinks}>
                <a href="/about">About us</a>
                <a href="/faq">FAQ</a>
              </div>
              
            </div>
            <div className={styles.footerRight}>
              <div className={styles.footerImages}>
                <a href="https://www.columbialandtrust.org/" target="_blank">
                  <Image 
                    src={cltLogo}
                    alt="Columbia Land Trust Logo"
                    width={150}
                    height={100}
                  />
                </a>
                <a href="https://birdallianceoregon.org/" target="_blank">
                  <Image 
                    src={baoLogo}
                    alt="Bird Alliance of Oregon Logo"
                    width={150}
                    height={100}
                  />
                </a>
              </div>
                <a href="https://backyardhabitats.org/" target="_blank">
                  <button className="button primary" >Visit our website</button>
                </a>
            </div>
        </div>
      </footer>
  );
}
