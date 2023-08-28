import { Settings } from "http2";
import styles from "./card.module.css";
import Image from "next/image";

export default function ({
  hospitalName,
  hospitalSrc,
}: {
  hospitalName: string;
  hospitalSrc: string;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.carding}>
        <Image src={hospitalSrc} alt="card" fill={true} objectFit="cover" />
      </div>
      <div className={styles.text}>{hospitalName}</div>
    </div>
  );
}
