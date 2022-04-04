import React, { useState, useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
} from "../actions";
import getProducts from "./products_filter";

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  total_products: 0,
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [categoryId, setCategoryId] = useState(0);
  const [sortName, setSortName] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getProducts(categoryId, sortName, sortPrice, searchText, currentPage, 9).then(
      (res) => dispatch({ type: LOAD_PRODUCTS, payload: res })
    );
  }, [categoryId, sortName, sortPrice, searchText, currentPage, 9]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const onChangePagination = (e) => {
    setCurrentPage(e);
  };

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };
  const updateSort = (e) => {
    const value = String(e.target.value);
    if (value.startsWith("p")) {
      setSortPrice(value.split("p-")[1]);
      setSortName("");
    } else {
      setSortName(value.split("n-")[1]);
      setSortPrice("");
    }
  };

  const searchFilters = (e) => {
    let value = e.target.value;
    setSearchText(value);
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    if (name === "category") {
      setCategoryId(e.target.getAttribute("data-key"));
    }
  };
  const clearFilters = () => {
    setSortName("");
    setSortPrice("");
    setSearchText("");
    setCategoryId(0);
    setCurrentPage(1);
  };
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        searchFilters,
        clearFilters,
        onChangePagination,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
