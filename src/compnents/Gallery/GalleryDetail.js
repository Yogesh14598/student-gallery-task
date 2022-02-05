import React, {  useState } from "react";
import GalleryData from "./GalleryData.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import Header from "../Header";

// Get ID from URL

const GalleryDetail = () => {
  const { id } = useParams();

  const [galdetail, setgaldetail] = useState(GalleryData);

  return (
    <div>
      <Header />
      <div className="d-flex flex-wrap justify-content-around">
        {galdetail
          .filter(function (item) {
            return parseInt(item.id) === parseInt(id);
          })
          .map((item) => {
            return (
              <>
                <div className="m-3  p-3 container  bg-white" key={item.id}>
                  <div className="text-center ">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="details-img img-fluid "
                    />
                  </div>
                  <div>
                    {item.detailPage.map((detailPage) => {
                      return (
                        <p className="text-black">{detailPage.productDetail}</p>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default GalleryDetail;
