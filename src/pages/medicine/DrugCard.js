import React, { useState, useEffect } from "react";

import { useParams, Link } from "react-router-dom";
import { getOneDrug, reset } from "../../features/drugReducer/drugSlice";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../components/Spinner";

function DrugCard() {
  const dispatch = useDispatch();
  const { drugs, isLoading, isError, message } = useSelector(
    (state) => state.drugs
  );
  console.log(drugs);
  const { _id } = useParams();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getOneDrug(_id));

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="container">
      {drugs.map((d, index) => (
        <h1 key={index}>{d.TradeName}</h1>
      ))}
    </div>
  );
}

export default DrugCard;
