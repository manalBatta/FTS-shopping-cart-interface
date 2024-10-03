import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { IconButton } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function MultiActionAreaCard({ product, handleClick }) {
  return (
    <Card sx={{ maxWidth: 345, display: "flex", flexDirection: "column" }}>
      <CardActionArea sx={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          height="150"
          image={product.image}
          alt={product.title}
          sx={{
            objectFit: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            noWrap={true}>
            {product.description}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ fontWeight: "700" }} // Increased font weight to bold
          >
            {product.price}$
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={() => handleClick(product.id, true)}>
          Add to Cart
        </Button>
        <IconButton aria-label="details" color="primary">
          <ArrowRightAltIcon></ArrowRightAltIcon>
        </IconButton>
      </CardActions>
    </Card>
  );
}
