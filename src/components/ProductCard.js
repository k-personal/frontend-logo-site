import { Box, Card, CardMedia } from "@mui/material";
import React from "react";

function ProductCard(props) {
  return (
    <div>
      <Box sx={{ minWidth: 255 }}>
        <Card variant="outlined" sx={{ borderRadius: "20px " }}>
          <CardMedia
            component="img"
            alt={props.product.name}
            height="255"
            image={props.product.imageUrl}
            sx={{ borderRadius: "20px" }}
          />
          {/* <CardContent>
            <Typography variant="h5" component="div">
              {props.product.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {props.product.category}
            </Typography>
            <Typography variant="body2">Rs.{props.product.price}</Typography>
          </CardContent> */}
          {/* <CardActions>
            <Button size="small">View</Button>
          </CardActions> */}
        </Card>
      </Box>
    </div>
  );
}

export default ProductCard;
