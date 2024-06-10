import React from "react";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Menu = ({ menuData, }) => {
  const navigate = useNavigate()
  const itemOnClickHandler = (id) => {
    navigate(`/item/${id}`)
  }


  console.log(menuData);
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {menuData.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }} key={menu.id}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
                onClick={() => itemOnClickHandler(menu.id)}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}

                </Typography>
                <Typography variant="body2"><h2>Price :   {menu.price}</h2></Typography>
                <Typography variant="body2">{menu.description}</Typography>


              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
