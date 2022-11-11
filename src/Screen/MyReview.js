import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Component/AuthProvider/AuthProvider";
const MyReview = () => {
  const [allReview, setAllReview] = useState([]);
  const [editReview, seteditReview] = useState("");
  const [editForm, setEditForm] = useState(false);
  const [editReviewId, setEditReviewId] = useState("");
  const [errMsg, setMsg] = useState("");

  const { user } = useContext(AuthContext);

  const deleteReview = (id) => {
    // console.log(id);
    if (window.confirm("Are You Sure?")) {
      fetch(`https://assi11server.vercel.app/api/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast(data.msg);
        });
    } else {
      return;
    }
  };
  const editReviewBtn = (id, RealReview) => {
    setEditForm(true);
    setEditReviewId(id);
    seteditReview(RealReview);
    // console.log(id, RealReview);
  };
  const reviewEditConfirm = () => {
    fetch(`https://assi11server.vercel.app/api/review/${editReviewId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ editReview }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast(data.msg);
      });
    seteditReview("");
  };
  useEffect(() => {
    window.document.title = "Review";
    fetch(`https://assi11server.vercel.app/api/myreview?email=${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${JSON.parse(
          localStorage.getItem("userToken")
        )}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMsg(data.msg);
        //toast(data.msg);
        setAllReview(data?.reverse());
      });
  }, [deleteReview, editReview]);

  return (
    <div className="container my-5">
      <h3>My Review</h3>
      <hr />
      <div className="editReviewForm my-3">
        {editForm && (
          <div className="div">
            <textarea
              value={editReview}
              className="form-control"
              onChange={(e) => seteditReview(e.target.value)}
              placeholder="Edit your review"
            ></textarea>
            <button onClick={reviewEditConfirm} className="btn btn-dark btn-sm">
              confirm
            </button>
          </div>
        )}
      </div>
      <div>
        {allReview.length > 0 ? (
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">Food</th>
                <th scope="col">Review</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {allReview &&
                allReview.map((mrv, idx) => (
                  <tr key={idx}>
                    <th scope="row">{mrv.food}</th>
                    <td>{mrv.review}</td>
                    <td>
                      <button
                        onClick={() => editReviewBtn(mrv._id, mrv.review)}
                        className="btn btn-info btn-sm"
                      >
                        edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => deleteReview(mrv._id)}
                        className="btn btn-danger btn-sm"
                      >
                        delete
                      </button>
                      <Toaster />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        ) : errMsg ? (
          <h1 className="text-center my-5">{errMsg}</h1>
        ) : (
          <h1 className="text-center my-5">No Review</h1>
        )}
      </div>
    </div>
  );
};

export default MyReview;
