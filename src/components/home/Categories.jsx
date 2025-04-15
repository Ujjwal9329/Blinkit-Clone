import { categoriesData } from "../../data/index";

const Categories = () => {
  return (
    <div className="container">
      <div className="row px-3 sm:gap-2 gap-xl-3 gap-md-3 gap-sm-3 gap-xs-1 justify-content-between">
        {categoriesData.map((image, index) => (
          <div
            key={index}
            className="col-lg-1 col-md-2 col-sm-4 col-4 d-flex justify-content-center align-items-center">
            <div
              className="category-card"
              style={{
                width: "120px",
                maxHeight: "188px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
              }}>
              <img
                src={image.src}
                alt={image.alt}
                className="img-fluid"
                style={{
                  maxHeight: "188px",
                  maxWidth: "120px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
