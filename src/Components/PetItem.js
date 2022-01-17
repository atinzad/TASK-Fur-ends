import React, { useState } from "react";

export default function PetItem(props) {
  const pet = props.pet;
  const [petImage, setPetImage] = useState(pet.image);
  const changeImage = () => {
    setPetImage(pet.image2);
  };
  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={petImage} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button type="button" className="btn btn-info" onClick={changeImage}>
            Pet
          </button>
        </div>
      </div>
    </div>
  );
}
