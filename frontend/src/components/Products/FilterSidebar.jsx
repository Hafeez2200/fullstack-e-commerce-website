import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const FilterSidebar = () => {

  const [searchParams,setSearchParams] = useSearchParams();
  const [filters,setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange,setPriceRange] = useState([0,100]);

  const categories = ["Top Wear", "Bottom Wear"]

  return (
    <div>FilterSidebar</div>
  )
}

export default FilterSidebar