import React, { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    window.document.title = "Blog";
  }, []);
  return (
    <div className="container my-5">
      <h2 className="text-danger my-2"> Topic</h2>
      <div>
        <div className="p-2">
          <div className="p-2 my-2 card">
            <h3>Difference between SQL and NoSQL</h3>
            <p>
              SQL is the programming language used to interface with relational
              databases. (Relational databases model data as records in rows and
              tables with logical links between them). NoSQL is a class of DBMs
              that are non-relational and generally do not use SQL.
            </p>
          </div>
          <div className="p-2 my-2 card">
            <h3>What is JWT, and how does it work?</h3>
            <p>
              What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open
              standard (RFC 7519) for securely transmitting information between
              parties as JSON object. It is compact, readable and digitally
              signed using a private key/ or a public key pair by the Identity
              Provider(IdP)
            </p>
          </div>
          <div className="p-2 my-2 card">
            <h3>What is the difference between javascript and NodeJS?</h3>
            <p>
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed. Node. js, on
              the other hand, is an interpreter or execution environment for the
              JavaScript programming language
            </p>
          </div>
          <div className="p-2 my-2 card">
            <h3>How does NodeJS handle multiple requests at the same time?</h3>
            <p>
              How NodeJS handle multiple client requests? NodeJS receives
              multiple client requests and places them into EventQueue. NodeJS
              is built with the concept of event-driven architecture. NodeJS has
              its own EventLoop which is an infinite loop that receives requests
              and processes them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
