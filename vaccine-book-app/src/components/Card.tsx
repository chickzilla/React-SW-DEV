import styles from "./card.module.css";
import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
export default function ({
  hospitalName,
  hospitalSrc,
}: {
  hospitalName: string;
  hospitalSrc: string;
}) {
  return (
    <InteractiveCard>
      <div className={styles.carding}>
        <Image src={hospitalSrc} alt="card" fill={true} objectFit="cover" />
      </div>
      <div className={styles.text}>{hospitalName}</div>
    </InteractiveCard>
  );
}
