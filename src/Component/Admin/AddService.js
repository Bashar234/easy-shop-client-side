import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const AddService = () => {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [longDes, setLongDes] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://assi11server.vercel.app/api/food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        img,
        title,
        longDes,
        rating,
        price,
        time: new Date(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("product added");
      });
    setImg("");
    setTitle("");
    setLongDes("");
    setRating("");
    setPrice("");
  };
  useEffect(() => {
    window.document.title = "Add service";
  }, []);
  return (
    <div className="container my-5">
      <div>
        <h3>Add service</h3>
        <hr />

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setImg(e.target.value)}
            value={img}
            placeholder="Add picture"
            className="form-control my-2"
          />
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Title"
            className="form-control"
          />

          <input
            type="text"
            onChange={(e) => setLongDes(e.target.value)}
            value={longDes}
            placeholder="Long description"
            className="form-control my-2"
          />
          <input
            type="text"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
            placeholder="Rating"
            className="form-control my-2"
          />
          <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            placeholder="Price"
            className="form-control my-1"
          />
          <button className="btn btn-dark form-control my-1">
            Add service
          </button>
          <Toaster />
        </form>
      </div>
    </div>
  );
};

export default AddService;
