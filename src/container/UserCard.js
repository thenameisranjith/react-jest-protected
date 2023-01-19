/* eslint-disable react/no-typos */
import React, { useState } from "react";
import Rating from "react-rating";
import PropTypes from "prop-types";
function UserCard(props) {
  const [rating, setRating] = useState(0);
  const [rating1, setRating1] = useState(false);
  const [rating2, setRating2] = useState(0);

  return (
    <>
      usercard {props.name} {props.star}
      <Rating initialRating={rating} onClick={setRating} />
      <h1>{rating}</h1>
      <hr />
      <Rating
        initialRating={rating1}
        onChange={setRating1}
        fractions={2}
        stop={7}
      />
      <h1>{rating1}</h1>
      <hr />
      <Rating
        fullSymbol="fa fa-star fa-2x star"
        emptySymbol="fa fa-star-o fa-2x star"
        initialRating={rating2}
        onChange={setRating2}
        fractions={2}
        stop={5}
      />
      <h1>{rating2}</h1>
      <hr />
      {/* {persons.map(e => (<div>
                <Rating
                    fullSymbol="fa fa-star fa-2x star"
                    emptySymbol="fa fa-star-o fa-2x star"
                    initialRating={rating2}
                    onChange={setRating2}
                    fractions={2}
                    stop={5}
                />
                <h1>{rating2}</h1>
            </div>))} */}
      <br />
    </>
  );
}

UserCard.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
};

export default UserCard;
