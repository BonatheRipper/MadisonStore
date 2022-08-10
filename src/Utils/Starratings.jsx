import React from "react";

const Starratings = ({ productReviews }) => {
  function StarRating() {
    let accumulator = 0;
    let divider = 0;
    let total = 0;

    let stars = {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
    };

    // we loop through each product ratings and   section the reviews by their rating Num
    productReviews.forEach((item) => {
      if (item.rating === 5) {
        stars[5] = stars[5] + 1;
      }
      if (item.rating === 4) {
        stars[4] = stars[4] + 1;
      }
      if (item.rating === 3) {
        stars[3] = stars[3] + 1;
      }
      if (item.rating === 2) {
        stars[2] = stars[2] + 1;
      }
      if (item.rating === 1) {
        stars[1] = stars[1] + 1;
      }
    });
    // we add multiple the review with its key perproduct them add them all
    for (let item in stars) {
      accumulator = item * stars[item] + accumulator;
      divider = stars[item] + divider;
    }
    // we then devide and get the total
    total = accumulator / divider;
    // we round total to whole number
    return Math.floor(total);

    // return total
  }
  console.log(StarRating());
  return (
    <div className="flex flex-row items-end p-2">
      {Array.from(Array(StarRating()).keys()).map((item) => {
        return (
          <small>
            <i class="fa fa-star" aria-hidden="true"></i>
          </small>
        );
      })}
      {Array.from(Array(5 - StarRating()).keys()).map((item) => {
        return (
          <small>
            <i class="fa fa-star-o" aria-hidden="true"></i>
          </small>
        );
      })}
    </div>
  );
};

export default Starratings;
