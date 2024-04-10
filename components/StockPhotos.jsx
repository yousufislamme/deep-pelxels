"use client";
import React, { useContext, useEffect, useState } from "react";
import { createClient } from "pexels";
import "./sp.css";
import { Context } from "@/Context/Context";

const StockPhotos = () => {
  const [myPhotos, setMyPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(); // State to keep track of selected photo
  const { searchGlo } = useContext(Context);
  const client = createClient(
    "jCS9KVx1hRI7y877Kg5NO1lkeIfFs9dXz28MxIWlQ4Z4lqPRndtrZRsy"
  );

  useEffect(() => {
    // Fetch photos from the Pexels API
    client.photos
      // query thek jekono kichu search kora jabe.
      .search({ query: searchGlo || "winter", per_page: 10 })
      .then((response) => {
        setMyPhotos(response.photos);
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  }, [searchGlo]); // Run once on component mount

  useEffect(() => {
    client.photos.search({});
  }, []);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <>
      <div className="container px-8 py-10">
        <div className="flex justify-between px-20 lg:w-[1200px]">
          <h2 className="text-xl">Free Stock Photos</h2>

          <p>Trending</p>
        </div>
      </div>
      <div className="container mx-auto px-8">
        <section>
          {myPhotos.map((photo) => (
            <div
              key={photo.id}
              className="item"
              onClick={() => handlePhotoClick(photo)}
            >
              <img src={photo.src.medium} alt={photo.url} />
            </div>
          ))}
        </section>
      </div>
      {selectedPhoto && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedPhoto.src.original} alt={selectedPhoto.alt} />
            <p>By: {selectedPhoto.photographer}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default StockPhotos;
