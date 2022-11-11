import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-center py-3 text-lg-start bg-dark text-white">
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  Easy Shop
                </h6>
                <p>
                  This is easy shop online service. You can order at 10AM from
                  10PM.
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Home
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Services
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Blog
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i>Dhaka,Uttara-10
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  easyshop@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i>Tel:+1123
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4">
          Copyright:©2022
          <a className="text-reset mx-1 fw-bold" href="/">
            easy.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
