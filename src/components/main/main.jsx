import Box from "@mui/material/Box";
import Widget from "../widget/widget";
import Feature from "../feature/feature";
import "./main.css";
import Overview from "../../overview/overview";
import Stats from "./../stats/stats";

const Main = () => {
  return (
    <Box sx={{ ml: 10, mt: 6, display: "flex" }}>
      <Box
        className="box-1"
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="widgets">
          <Widget type="revenue" />
          <Widget type="order" />
          <Widget type="customer" />
        </div>
        <Box
          sx={{
            width: "100%",
            my: 2,
            p: "10px",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            boxShadow: 4,
          }}
        >
          <Overview />
        </Box>
        <div className="bottom">
          <Stats />
        </div>
      </Box>
      <Box className="box-2">
        <Feature />
      </Box>
    </Box>
  );
};

export default Main;
