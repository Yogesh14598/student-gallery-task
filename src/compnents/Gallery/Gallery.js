import React, { useState } from "react";
import GalleryData from "./GalleryData.json";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Header";

const Gallery = () => {
  const [photosveiw, setphotosveiw] = useState(GalleryData);

  return (
    <div>
      <Header />
      <h2 className="text-black m-5">Gallery List </h2>
      <div className="d-flex flex-wrap justify-content-around">
        {photosveiw.map((item) => {
          return (
            <>
              <div className="m-3 shadow p-3  bg-white rounded" key={item.id}>
                <Card style={{ width: "22rem" }}>
                  <Card.Img variant="top" src={item.img} />
                  <Card.Body>
                    <Card.Title>
                      <h2>{item.title}</h2>
                    </Card.Title>
                    <Link to={`/gallerydetail/${item.id}`}>
                      <button className="btn btn-danger">Veiw Details</button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
