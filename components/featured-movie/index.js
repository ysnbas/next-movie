"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

import styles from "./styles.module.css";

import { postAddFavorite } from "@/services/movie";

function FeaturedMovie({ movie = {}, isCompact = true }) {
  const { poster_path, title, overview } = movie;

  const handleAddFavorite = () => {
    const requestObj = {
      media_type: "movie",
      media_id: movie.id,
      favorite: true,
    };
    postAddFavorite("20604817", requestObj)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.movieWrapper}>
      <h1 className={styles.movieTitle}>{title}</h1>
      <p
        className={`${styles.overview} ${
          isCompact ? styles.shortOverview : ""
        }`}
      >
        {overview}
      </p>
      <div className={styles.actionButtons}>
        <Link className={styles.playButton} href={`/movie/${movie.id}`}>
          Play
        </Link>
        <button
          className={styles.addButton}
          onClick={() => handleAddFavorite()}
        >
          <FaPlus />
        </button>
      </div>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          fill
        />
      </div>
    </div>
  );
}

export default FeaturedMovie;
