import React, { useState, useEffect } from "react";

import { useParams, Link } from "react-router-dom";
import { getOneDrug, reset } from "../../features/drugReducer/drugSlice";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../components/Spinner";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import drugImge from "../../images/noPhoto.jpg";
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
      {drugs.map((drug, index) => (
        <Card style={{ width: "25rem" }} key={index}>
          <Card.Img variant="top" src={drugImge} />
          <Card.Body>
            <Card.Title className="text-danger">{drug.TradeName}</Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <span className="drugCard_span ">Scientific Name :</span>{" "}
              {drug.ScientificName}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="drugCard_span">PublicPrice :</span>{" "}
              {drug.PublicPrice} SR
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <span className="drugCard_span">DrugType :</span> {drug.DrugType}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="drugCard_span">Strength :</span> {drug.Strength}
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <span className="drugCard_span">Strength Unit :</span>{" "}
              {drug.StrengthUnit}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="drugCard_span">Pharmaceutical Form :</span>{" "}
              {drug.PharmaceuticalForm}
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <span className="drugCard_span">Administration Route :</span>{" "}
              {drug.AdministrationRoute}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="drugCard_span">Size :</span> {drug.Size}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="drugCard_span">Size Unit :</span> {drug.SizeUnit}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="drugCard_span">Package Types :</span>{" "}
              {drug.PackageTypes}
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <span className="drugCard_span">Package Size :</span>{" "}
              {drug.PackageSize}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="drugCard_span">LegalStatus :</span>{" "}
              {drug.LegalStatus}
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <span className="drugCard_span">DistributeArea :</span>{" "}
              {drug.DistributeArea}
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <span className="drugCard_span">ShelfLife :</span>{" "}
              {drug.ShelfLife}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="drugCard_span">Marketing Company :</span>{" "}
              {drug.MarketingCompany}
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <span className="drugCard_span">MarketingCountry :</span>{" "}
              {drug.MarketingCountry}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="drugCard_span">ManufactureName :</span>{" "}
              {drug.ManufactureName}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="drugCard_span">ManufactureCountry :</span>{" "}
              {drug.ManufactureCountry}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="drugCard_span">MainAgent :</span>{" "}
              {drug.MainAgent}
            </ListGroup.Item>
            <ListGroup.Item></ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default DrugCard;
