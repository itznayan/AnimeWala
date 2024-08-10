import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const TopRatedAnimeCard = ({ imageUrl, title, rating, desc }) => {
  return (
    <Card className="mt-6 w-96 shadow-2xl">
      <CardHeader color="gray" className="relative h-56">
        <img
          src={imageUrl}
          alt={title}
          className="object-contain w-full h-full"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>Rating: {rating}</Typography>
        <p className="line-clamp-3">{desc}</p>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>More Details</Button>
      </CardFooter>
    </Card>
  );
};

export default TopRatedAnimeCard;
