import React, { Fragment, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDrugs, reset } from "../../features/drugReducer/drugSlice";
import Spinner from "../../components/Spinner";

function ScientificName() {
  const { drugs, isLoading, isError, message } = useSelector(
    (state) => state.drugs
  );
  const { ScientificName } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getDrugs());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      ScientificName {ScientificName}
      {drugs
        .filter((drug) => drug.ScientificName === ScientificName)
        .map((drug, index) => (
          <h3>{drug.TradeName}</h3>
        ))}
    </Fragment>
  );
}

export default ScientificName;
