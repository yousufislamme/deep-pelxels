"use client";
import React, { useContext, useEffect, useState } from "react";
import { createClient } from "pexels";
import "./sp.css";
import { Context } from "@/Context/Context";
import Button from "./Button";
import { CiBookmark } from "react-icons/ci";
import { SlLike } from "react-icons/sl";

const StockPhotos = () => {
  const [myPhotos, setMyPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState();
  const [like, setLike] = useState(false);
  const { searchGlo } = useContext(Context);
  const client = createClient(
    "jCS9KVx1hRI7y877Kg5NO1lkeIfFs9dXz28MxIWlQ4Z4lqPRndtrZRsy",
  );

  useEffect(() => {
    client.photos
      .search({ query: searchGlo || "winter", per_page: 100 })
      .then((response) => {
        setMyPhotos(response.photos);
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  }, [searchGlo]);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  const handleLike = (e) => {
    setLike(!like);
  };

  const getPexelsProfileUrl = (username) => {
    return `https://www.pexels.com/@${username}`;
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
            <div className="mb-4 flex">
              <div className="flex w-full justify-between">
                <div className="flex w-full">
                  {/* Profile picture */}
                  <div
                    style={{ backgroundColor: `${selectedPhoto.avg_color}` }}
                    className={`size-12 bg-["${selectedPhoto.avg_color}"] mr-3 rounded-full`}
                  >
                    {console.log("color", selectedPhoto.avg_color)}
                    <img src={selectedPhoto.photographer_url} alt="Pic" />
                  </div>
                  {/* Photographer name */}
                  <div>
                    <h2 className="font-semibold">
                      {selectedPhoto.photographer}
                    </h2>
                    <p>Follow</p>
                  </div>
                </div>
              </div>
              {/* Buttons */}
              <div className="flex gap-4 ">
                <Button
                  btnTitle="Collect"
                  icon={CiBookmark}
                  className="block rounded-lg border-[1px] px-4 py-2 text-sm hover:border-slate-900"
                />
                <Button
                  onClick={handleLike}
                  btnTitle={like ? "Like" : "Liked"}
                  icon={SlLike}
                  btnIconClass="flex"
                  className="block rounded-lg border-[1px] px-4 py-2 text-sm hover:border-slate-900"
                />
                <a
                  className="text-mg block rounded-lg border-[1px] px-4 py-2 font-semibold hover:border-slate-900"
                  href={`${selectedPhoto.src.original}`}
                  download
                >
                  Download
                </a>
              </div>
            </div>
            <img src={selectedPhoto.src.original} alt={selectedPhoto.alt} />
          </div>
        </div>
      )}
    </>
  );
};

export default StockPhotos;
