import React from "react";

function UserWishListForm() {
  const [value, setValue] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setValue("");
  }

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add Item</label>
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}

export default UserWishListForm;
