"use client";

import React from "react";
import { useRouter } from "next/navigation";

import styles from "./styles.module.css";
import Select from "@/components/select";

export default function Categories({ categories }) {
  const router = useRouter();

  const handleChange = (event) => {
    const id = event?.target?.value;
    router.push(`/${id}`);
  };

  return (
    <div className={styles.categories}>
      <Select
        onChange={handleChange}
        data={categories}
        initalValue={"Select a categories"}
      />
    </div>
  );
}
