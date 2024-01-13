import React from "react";

import styles from "./styles.module.css";
import Loading from "@/components/loading";

export default function FeatureMovieLoading() {
  return (
    <div style={{ height: 278 }} className={styles.movieWrapper}>
      <Loading />
    </div>
  );
}
