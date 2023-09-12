import styles from "./banner.module.css";
import Image from "next/image";

export default function () {
  return (
    <div className={styles.Banner}>
      <Image
        src={"/img/vaccine_banner.jpg"}
        alt="cover"
        fill={true}
        className="object-cover"
        priority
        sizes="100vh"
      />
      <div className={styles.bannerText}>
        <h1 className="text-6xl font-bold mb-2">VaxServe</h1>
        <h3 className="text-base mt-3 font-medium">
          "Your Pathway to a Safer Tomorrow"
        </h3>
      </div>
    </div>
  );
}
