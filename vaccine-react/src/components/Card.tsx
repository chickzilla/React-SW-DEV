import styles from "./card.module.css";
import Image from "next/image";

export default function () {
  return (
    <div className={styles.card}>
      <div className={styles.carding}>
        <Image
          src={"/img/vaccine_card.jpg"}
          alt="card"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className={styles.text}>Vaccines: Your Shield Against COVID-19</div>
    </div>
  );
}
