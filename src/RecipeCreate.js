import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
  const [name, setName] = useState("")
  const [cuisine, setCuisine] = useState("")
  const [photo, setPhoto] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [preparation, setPreparation] = useState("")

  const handleNameChange = (event) => setName(event.target.value);
  const handleCuisineChange = (event) => setCuisine(event.target.value);
  const handlePhotoChange = (event) => setPhoto(event.target.value);
  const handleIngredientsChange = (event) => setIngredients(event.target.value);
  const handlePrepChange = (event) => setPreparation(event.target.value);

 const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = {
      name,
      cuisine,
      photo,
      ingredients,
      preparation,
    }
    createRecipe(newRecipe);
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  }


  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required={true} onChange={handleNameChange} placeholder="Name" />
        </div>
        </td>
        <td>
        <div>
          <label htmlFor="cuisine">Cuisine</label>
          <input type="text" id="cuisine" name="cuisine" required={true} onChange={handleCuisineChange} placeholder="Cuisine" />
        </div>
        </td>
        <td>
        <div>
          <label htmlFor="photo">Photo</label>
          <input type="url" id="photo" name="photo" required={true} onChange={handlePhotoChange} placeholder="URL" />
        </div>
        </td>
        <td>
        <div>
          <label htmlFor="ingredients"></label>
          <textarea name="ingredients" id="ingredients" required={true} onChange={handleIngredientsChange} placeholder="Ingredients" rows="5" />
        </div>
        </td>
        <td>
        <div>
          <label htmlFor="preparation"></label>
          <textarea name="preparation" id="preparation" required={true} onChange={handlePrepChange} placeholder="Preparation" rows="5" />
        </div>
        </td>
        <td>
        <div>
          <button type="submit">Create</button>
        </div>
        </td>
        </tr>
        </tbody>
        </table>
    </form>
  );
}

export default RecipeCreate;




