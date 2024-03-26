

const CategoryCard = ({ categoryCardSrc, categoryTitle, categoryDesc }) => {



  return (
    <div className="cardcat shadow-lg mx-1">
      <a href="/">
        <img
          style={{ objectFit: "cover" }}
          src={categoryCardSrc}
          className="cardcat-image img-fluid"
          alt="ooo"
        />
        <div className="bg-red w-100 h-100 bg-shade position-relative"></div>
      </a>
      <p className="cardcat-heading h3 text-center"> {categoryTitle}</p>
      <div className="cardcat-body">
        <h2> {categoryTitle}</h2>
        <p>{categoryDesc}</p>
        <a href="/"> View More</a>
      </div>
    </div>
  );
};

export default CategoryCard;
