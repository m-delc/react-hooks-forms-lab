import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";


function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")
  const [name, setName] = useState("")
  const {category, setCategory} = useState("Produce")

  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = { name: name,
      category: category,
      id: uuid() }
      const dataArray = [...items, formData]
      onItemFormSubmit(dataArray)
      setName("")
      setCategory("Produce")
    }


    function handleSearchForm (event) {
      setSearch(event.target.value)
    }
    
    function handleCategoryChange(event) {
      setSelectedCategory(event.target.value);
    }

    function handleNameChange (event) {
      setName(event.target.value)
    }

    function handleItemCategoryChange (event) {
      setCategory(event.target.value)
    }

    const itemsToDisplay = items.filter((item) => {
      if (search === "") return true;
          return item.name === search
    })




  // const itemsToDisplay = items.filter((item) => {
  //   if (selectedCategory === "All") return true;

  //   return item.category === selectedCategory;
  // });


  return (
    <div className="ShoppingList">
      <ItemForm handleName={handleNameChange} handleCategory={handleItemCategoryChange} onItemFormSubmit={handleFormSubmit}/>
      <Filter onSearchChange={handleSearchForm}
              onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
