import React, { useState, useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  UPDATE_FILTERS,
  CLEAR_FILTERS,
} from "../actions";
import getProducts from "./products_filter";

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [sortName, setSortName] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getProducts(categoryId, sortName, sortPrice, searchText).then((res) =>
      setProducts(res)
    );
  }, [categoryId, sortName, sortPrice, searchText]);

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

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

    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const searchFilters = (e) => {
    let value = e.target.value;
    setSearchText(value);
  };

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      setCategoryId(e.target.getAttribute("data-key"));
    }
    if (name === "price") {
      value = Number(value);
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  const clearFilters = () => {
    setSortName("");
    setSortPrice("");
    setSearchText("");
    setCategoryId(0);
    dispatch({ type: CLEAR_FILTERS });
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
