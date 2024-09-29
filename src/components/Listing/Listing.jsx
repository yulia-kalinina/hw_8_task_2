const Listing = ({ items = [] }) => {
  const { listing_id, url, MainImage, title, currency_code, price, quantity } =
    items;

  let quantityClassMarker = "";

  return (
    <div className="item-list">
      {items.map((elem) => {
        if (elem.quantity > 20) {
          quantityClassMarker = "level-high";
        } else if (elem.quantity > 10) {
          quantityClassMarker = "level-medium";
        } else if (elem.quantity < 10) {
          quantityClassMarker = "level-low";
        }

        const combinedClass = quantityClassMarker + " " + "item-quantity";

        let sliceTitle = elem.title.slice(0, 50);
        if (sliceTitle.length < elem.title.length) {
          sliceTitle += "...";
        }
        console.log(sliceTitle);

        if (elem.state === "active")
          return (
            <div className="item" key={elem.listing_id}>
              <div className="item-image">
                <a href={elem.url}>
                  <img src={elem.MainImage["url_570xN"]} />
                </a>
              </div>
              <div className="item-details">
                <p className="item-title">{elem.title || "Test text"}</p>
                <p className="item-price">
                  {elem.currency_code} {elem.price}
                </p>
                <p className={combinedClass}>{elem.quantity} left</p>
              </div>
            </div>
          );

        if (elem.state !== "active") {
          return <div key={elem.listing_id}></div>;
        }
      })}
    </div>
  );
};

export default Listing;
