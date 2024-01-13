import React from "react";
import Skeleton from "@/components/skeleton";

import styles from "./styles.module.css";

export default function MoviesSectionLoading() {
  return (
    <div className={styles.moviesSection}>
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <Skeleton key={index} height={72} />
        ))}
    </div>
  );
}
