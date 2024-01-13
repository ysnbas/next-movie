import React from "react";
import FeaturedMovie from "@/components/featured-movie";

export default function MovieContainer({ movie }) {
  return <FeaturedMovie movie={movie} isCompact={false} />;
}
