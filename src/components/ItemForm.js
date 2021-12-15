import React, {useState} from "react";




function ItemForm({ handleName, handleCategory, onItemFormSubmit }) {

  return (
    <form onSubmit ={onItemFormSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={handleName}
               type="text" 
               name="name" />
      </label>

      <label>
        Category:
        <select onSubmit={handleCategory}
                name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}
  
  // const [name, setName] = useState("")
  // const [category, setCategory] = useState("Produce")
  // const [submittedData, setSubmittedData] = useState([])
  





export default ItemForm;
