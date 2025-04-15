import { ImagesData, ImagesData2 } from "../../data/index";
import "../../styles/PanCorner.css";

const PanCorner = () => {
  return (
    <>
      <div className="container w-100 cursor-pointer">
        <img
          src={ImagesData[0].panCornerImageSrc}
          alt={ImagesData[0].name}
          className="w-100"
        />
      </div>

      {/* Category Images */}
      <div className="container px-3 category-herocontainer w-100 ">
        {ImagesData2.map((image, index) => (
          <div key={index} className="image-card">
            <img
              src={image[`img${index + 1}`]}
              alt={image.name}
              className="category-card-img"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default PanCorner;
