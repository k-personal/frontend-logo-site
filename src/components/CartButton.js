import React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function CartButton(props) {
  let cartItemsCount = props.cartCount;
  return (
    <div>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={cartItemsCount} color="success">
          <ShoppingBagIcon />
        </StyledBadge>
      </IconButton>
    </div>
  );
}

export default CartButton;
