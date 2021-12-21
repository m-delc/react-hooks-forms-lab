// item`forms
import React from "react";


function ItemForm({ inputFunk1, categoryFunk1, onItemFormSubmit }) {




  return (
    <form onSubmit={onItemFormSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={inputFunk1} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={categoryFunk1} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;