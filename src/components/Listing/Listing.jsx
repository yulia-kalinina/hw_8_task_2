const Listing = ({ items = [] }) => {
  const { listing_id, url, MainImage, title, currency_code, price, quantity } =
    items;

  return (
    <div className="item-list">
      {items.map((elem, index) => {
        if (elem.quantity > 20) {
          elem.quantityClassMarker = "level-high";
        } else if (elem.quantity > 10) {
          elem.quantityClassMarker = "level-medium";
        } else if (elem.quantity < 10) {
          elem.quantityClassMarker = "level-low";
        }

        const combinedClass = elem.quantityClassMarker + " " + "item-quantity";

        elem.sliceTitle = elem.title.slice(0, 50);
        if (elem.sliceTitle.length < elem.title.length) {
          elem.sliceTitle += "...";
        }
        console.log(elem.sliceTitle);

        if (elem.state === "active")
          return (
            <div className="item" key={elem.listing_id}>
              <div className="item-image">
                <a href={elem.url}>
                  <img src={elem.MainImage["url_570xN"]} />
                </a>
              </div>
              <div className="item-details">
                <p className="item-title">{elem.sliceTitle}</p>
                <p className="item-price">
                  {elem.currency_code} {elem.price}
                </p>
                <p className={combinedClass}>{elem.quantity} left</p>
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default Listing;
