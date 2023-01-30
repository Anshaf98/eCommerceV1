import React from "react";
import { FaImage } from "react-icons/fa";

const ChangeImage = () => {
  return (
    <form>
      <div className="updateImage">
        <label htmlFor="image" className="labelImage">
          <FaImage />
        </label>
        <input
          type="file"
          id="image"
          accept=".png, .jpg, .jpeg"
          className="userImage"
        />
      </div>
      <button>Update User Image</button>
    </form>
  );
};

export default ChangeImage;
