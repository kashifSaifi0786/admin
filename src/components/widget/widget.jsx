import "./widget.css";
import Box from "@mui/material/Box";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import Chip from "@mui/material/Chip";
import { green } from "@mui/material/colors";

const Widget = ({ type }) => {
  return (
    <Box
      sx={{
        height: 100,
        width: "32.3%",
        backgroundColor: "white",
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "20px",
        boxShadow: 2,
      }}
    >
      <div className="left">
        <div className="icon">
          {type === "revenue" ? (
            <DataUsageIcon sx={{ fontSize: 30 }} />
          ) : type === "order" ? (
            <LocalMallIcon sx={{ fontSize: 30 }} />
          ) : (
            <SupervisedUserCircleIcon sx={{ fontSize: 30 }} />
          )}
        </div>
        <div className="details">
          <div className="title">
            {type === "revenue"
              ? "Revenue"
              : type === "order"
              ? "Order"
              : "Customers"}
          </div>
          <div className="count">
            {type === "revenue"
              ? "$41,548"
              : type === "order"
              ? "3,545"
              : "65,350"}
          </div>
        </div>
      </div>
      <div className="right">
        <Chip
          label={
            type === "revenue"
              ? "+2.65%"
              : type === "order"
              ? "-0.82%"
              : "-1.04%"
          }
          sx={{ color: green, fontSize: 12 }}
          color={
            type === "revenue"
              ? "success"
              : type === "order"
              ? "warning"
              : "warning"
          }
          variant="outlined"
        />
      </div>
    </Box>
  );
};

export default Widget;
