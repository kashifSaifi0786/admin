import "./feature.css";
import Box from "@mui/material/Box";
import { Avatar, Divider } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Feature = () => {
  return (
    <Box
      sx={{
        mx: 2,
        borderRadius: "20px",
        boxShadow: 4,
      }}
    >
      <div className="upper">
        <div className="header">
          <div className="dots">...</div>
        </div>
        <div className="avatar-name">
          <Avatar
            src="https://images.unsplash.com/photo-1485875437342-9b39470b3d95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            sx={{ height: "70px", width: "70px", mt: 1 }}
          />
          <div className="title">Jennifer Bennett</div>
          <div className="desc">Product Designer</div>
        </div>
        <div className="info">
          <div className="products">
            <div className="title">19,69</div>
            <div className="desc">Products</div>
          </div>
          <div className="vl"></div>
          <div className="followers">
            <div className="title">5.2k</div>
            <div className="desc">Followers</div>
          </div>
        </div>
      </div>
      <Divider />
      <div className="center">
        <div className="center-header">
          <div className="title space">Total Revenue</div>
          <InfoOutlinedIcon sx={{ marginRight: 1, cursor: "pointer" }} />
        </div>
        <div className="featured-chart">
          <CircularProgressbar value={60} text={`${60}%`} />
        </div>
        <div className="title">$75,589</div>
        <div className="desc">Earning this Month</div>
      </div>
      <div className="summary">
        <div className="item">
          <div className="itemTitle">Last Month</div>
          <div className="itemResult positive">
            <KeyboardArrowUpOutlinedIcon fontSize="small" />
            <div className="resultAmount">$ 4,577</div>
          </div>
        </div>
        <div className="item">
          <div className="itemTitle">This Month</div>
          <div className="itemResult positive">
            <KeyboardArrowUpOutlinedIcon fontSize="small" />
            <div className="resultAmount">$ 9,574</div>
          </div>
        </div>
      </div>
      <Divider />
      <div className="bottom">
        <div className="bottom-container">
          <div className="title">Recent Activity</div>
          <div className="activity-data">
            <div className="data-date">
              <div>12</div>
              <div className="desc">Sep</div>
            </div>
            <div className="data-desc">
              Responded to need "Volunteer Activities"
            </div>
          </div>
          <div className="activity-data">
            <div className="data-date">
              <div>12</div>
              <div className="desc">Jul</div>
            </div>
            <div className="data-desc">Special day for me...</div>
          </div>
          <div className="activity-data">
            <div className="data-date">
              <div>26</div>
              <div className="desc">Sep</div>
            </div>
            <div className="data-desc">
              Joined the group "Boardsmanship Forum"
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Feature;
