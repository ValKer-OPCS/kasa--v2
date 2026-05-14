import { cache } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Slideshow from "@/components/slideshow/slideshow";
import Card from "@/components/card/card";
import Rating from "@/components/rating/rating";
import Tags from "@/components/tags/tags";
import Dropdown from "@/components/dropdown/dropdown";

import styles from "./styles.module.scss";
import rentalDropdown from "@/components/dropdown/dropdownRental.module.scss";
import hostCard from "@/components/card/hostCard.module.scss";

type Props = {
  params: Promise<{ id: string }>;
};

type Rental = {
  id: string;
  title: string;
  location: string;
  description: string;
  pictures: string[];
  rating: string;
  tags: string[];
  equipments: string[];
  host: {
    name: string;
    picture: string;
  };
};

const getRentals = cache(async (): Promise<Rental[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/data/rentals.json`,
    { cache: "force-cache" }
  );

  if (!response.ok) return [];

  return response.json();
});

const getRentalById = cache(async (id: string): Promise<Rental | null> => {
  const rentals = await getRentals();
  return rentals.find((rental) => rental.id === id) ?? null;
});

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { id } = await params;
  const rental = await getRentalById(id);

  if (!rental) {
    return {
      title: "Location introuvable",
      description: "Cette location n'existe pas ou a été supprimée.",
    };
  }

  return {
    title: `${rental.title} - ${rental.location}`,
    description: rental.description,

    openGraph: {
      title: rental.title,
      description: rental.description,
      images: rental.pictures?.[0] ?? "",
    },

    twitter: {
      card: "summary_large_image",
      title: rental.title,
      description: rental.description,
      images: [rental.pictures?.[0] ?? ""],
    },
  };
};

export const generateStaticParams = async () => {
  const rentals = await getRentals();
  return rentals.map((rental) => ({ id: rental.id }));
};

const RentalPage = async ({ params }: Props) => {
  const { id } = await params;
  const rental = await getRentalById(id);

  if (!rental) notFound();

  const { host } = rental;

  return (
    <main>
      <div className={styles.rental_container}>
        <Slideshow pictures={rental.pictures} title={rental.title} fadeDuration={100} />

        <div className={styles.content}>
          <div className={styles.title_container}>
            <h2>{rental.title}</h2>
            <p>{rental.location}</p>
          </div>

          <div className={styles.card_rating}>
            <Card cover={host.picture} title={host.name} styles={hostCard} imgWidth={400} imgHeight={400} />
            <Rating rating={Number(rental.rating)} icon="fa-solid fa-star" maxRating={5} fillColor="#FF6060" emptyColor="#E3E3E3" />
          </div>

          <div className={styles.tags_container}>
            <Tags data={rental.tags} />
          </div>
        </div>

        <div className={styles.dropdown_container}>
          <Dropdown title="Description" styles={rentalDropdown}>
            <p>{rental.description}</p>
          </Dropdown>

          <Dropdown title="Équipements" styles={rentalDropdown}>
            <ul>
              {rental.equipments.map((item, index) => (
                <li className={styles.list} key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </Dropdown>
        </div>
      </div>
    </main>
  );
};

export default RentalPage;