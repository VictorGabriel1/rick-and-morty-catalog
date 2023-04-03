import React from "react";
import { ClearMessage } from "./styles";

interface ClearFiltersProps {
  handleClear: () => void;
}

export default function ClearFilters({ handleClear }: ClearFiltersProps) {
  return <ClearMessage onClick={handleClear}>Clear Filters</ClearMessage>;
}
