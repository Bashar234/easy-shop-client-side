import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";
const Services = () => {
  const [services, setServices] = useState([]);
  const [priceOrder, setPriceOrder] = useState(false);
  useEffect(() => {
    window.document.title = "Services";
    fetch("https://assi11server.vercel.app/api/food")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [priceOrder]);
  if (priceOrder) {
    services.sort((a, b) => (a.price > b.price ? 1 : -1));
  }

  return (
    <div className="services container my-4">
      <h3>Servicess</h3>
      <hr />
      <div className="row mt-3">
        <div className="col-md-2">
          <h4>Filter</h4>
          <div className="form-check">
            <input
              onClick={() => setPriceOrder(!priceOrder)}
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Low Price
            </label>
          </div>
        </div>
        <div className="col-md-9">
          <div className="row">
            {services.length > 0 ? (
              services.map((item) => (
                <div className="col-md-4 cardImg">
                  <div className="card my-2">
                    <PhotoProvider>
                      <PhotoView src={item.img}>
                        <img
                          src={item.img}
                          class="card-img-top img-fluid"
                          alt="food"
                        />
                      </PhotoView>
                    </PhotoProvider>

                    <div className="card-body">
                      <h4 className="card-title">{item.title}</h4>
                      <h5>Price:{item.price} Tk</h5>
                      <h5>Rating:{item.rating}</h5>
                      <p className="card-text">{item.shortDes}</p>
                      <Link
                        to={`/single-food/${item._id}`}
                        className="btn btn-primary"
                      >
                        View 
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            )}
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default Services;
