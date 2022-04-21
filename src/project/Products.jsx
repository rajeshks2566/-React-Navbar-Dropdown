import React, { useState } from "react";
import JSON from "./elements.json";
const Products = () => {
  let [color, setColor] = useState(JSON.products.slice(0, 10));

  let pagination = e => {
    e.preventDefault();
    let page = e.target.textContent;
    if (page === 1) {
      setColor(JSON.products.slice(0, 10));
      return;
    }
    let start = page * 10 - 10;
    let end = page * 10;
    setColor(JSON.products.slice(start, end));
  };
  return (
    <section className="secBlock">
      <article className="artBlock">
        {color.map(value => {
          return (
            <div>
              <figure>
                <img src={value.thumbnail} alt={value.title} />
              </figure>
              <h3>{value.title}</h3>
              <p className="p">
                {" "}
                Rating** : {value.rating}
                <p className="bestseller">
                  {value.rating > 4.4 ? "Best Seller..." : ""}
                </p>
              </p>
              <p className="p2">Price : ${value.price}</p>
              <p className="p3">{value.discountPercentage}% off available</p>
              <p className="p4">{value.description}</p>
            </div>
          );
        })}
        <div className="btn">
          <button onClick={pagination}>1</button>
          <button onClick={pagination}>2</button>
          <button onClick={pagination}>3</button>
        </div>
      </article>
    </section>
  );
};

export default Products;
