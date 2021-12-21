// shoppinglist

import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {

  // state for Filter.js category
  const [selectedCategory, setSelectedCategory] = useState("All");
  // stater for Filter.js "name" search field
  const [search, setSearch] = useState('')
  // state for ItemList.js category
  const [category, setCategory] = useState('Produce')
  // state for ItemList.js input
  const [name, setName] = useState('')

  const [formSubmit, setFormSubmit] = useState(items)

  // callback, search from Filter.js
  function inputSearch (event) {
    setSearch(event.target.value)
  }
  // callback, category change on Filter.js
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  // callback, category change on ItemList.js
  function categoryFunk(event) {
    setCategory(event.target.value)
  }
  // callback, input field on ItemList.js
  function inputFunk (event) {
    setName(event.target.value)
  }

  // filter logic
  const itemsToDisplay = formSubmit.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  })
    .filter((item) => {
      if (search.length > 0) return item.name.toLowerCase().includes(search.toLowerCase())
      else {return true}
    })
  
  function handleFormSubmit (event) {
    event.preventDefault()
    const newItem = {
      id: uuid(), 
      name: name,
      category: category
    };
    const newArr = [...formSubmit, newItem]
    setFormSubmit(newArr)
    setName('')
    setCategory('Produce')
  }
  
    return (
      <div className="ShoppingList">
        <ItemForm categoryFunk1={categoryFunk} 
                  inputFunk1={inputFunk} 
                  onItemFormSubmit={handleFormSubmit} />
                  {/* // name={name} category={category}
                  // setCategory={setCategory}
                  // setName={setName}
                  // items={items} */}
        <Filter onCategoryChange={handleCategoryChange} 
                inputSearch={inputSearch} />
        <ul className="Items">
          {itemsToDisplay.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))}
        </ul>
      </div>
    );
}

export default ShoppingList;

