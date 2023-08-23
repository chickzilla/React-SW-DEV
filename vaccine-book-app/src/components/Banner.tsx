import styles from "./banner.module.css";
import Image from "next/image";

export default function () {
  return (
    <div className={styles.Banner}>
      <Image
        src={"/img/vaccine_banner.jpg"}
        alt="cover"
        fill={true}
        objectFit="cover"
        priority
      />
      <div className={styles.bannerText}>
        <h1 className={styles.title}>VaxServe</h1>
        <h3 className={styles.slogan}>"Your Pathway to a Safer Tomorrow"</h3>
      </div>
    </div>
  );
}
