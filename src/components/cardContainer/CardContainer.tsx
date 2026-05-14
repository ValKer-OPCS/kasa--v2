import Link from "next/link";
import styles from "./styles.module.scss";
import homeCard from "@/components/card/homeCard.module.scss";
import Card from "@/components/card/card";
import rentalsData from "@/data/rentals.json";

type Rental = {
  id: string;
  title: string;
  cover: string;
};

const CardContainer = () => {
  const rentals: Rental[] = rentalsData;

  return (
    <div className={styles.cards_container}>
      {rentals.map((rental) => (
        <Link key={rental.id} href={`/rental/${rental.id}`} className={styles.link}>
          <Card cover={rental.cover} title={rental.title} styles={homeCard} imgWidth={400} imgHeight={400}/>
        </Link>
      ))}
    </div>
  );
};

export default CardContainer;