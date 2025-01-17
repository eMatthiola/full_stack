import { useState } from "react";
import React from "react";

const InputTodo = () => {
    const [description, setDescription] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            
            console.log(response);
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };

    return( 
        <div className="container mt-5">
        <h1 className="text-center">Input Todo</h1>
        <form style={{ display: "flex", justifyContent: "center", alignItems: "center" }} onSubmit={onSubmitForm}>
          <input
            type="text"
            style={{ width: "50%", marginRight: "10px" }}
            className="form-control"
            placeholder="Enter a todo"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <button className="btn btn-success">Add</button>
        </form>
      </div>
    
);
};

export default InputTodo;