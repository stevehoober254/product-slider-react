import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Product(props) {
  let { imgSrc, price, title } = props.data;
  return (
    <Card className="p-0 overflow-hidden h-100 shadow">
      <div className="overflow-hidden p-0 rounded bg-light text-center">
        <Card.Header  className="text-center">
        <Card.Img variant="top" src={imgSrc} alt={title} className="w-50"></Card.Img>
        </Card.Header>
        <Card.Body className="text-center">
          <Card.Title className="display-6">{price}</Card.Title>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
        <Card.Footer className="d-grid gap-2">
        <Button className="W-100 rounded-O" variant="success" size="lg">
          Add to Cart
        </Button>
        </Card.Footer>
      </div>
    </Card>
  );
}
