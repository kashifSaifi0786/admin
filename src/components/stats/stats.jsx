import "./stats.css";
import Box from "@mui/material/Box";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
import { PieChart, Pie } from "recharts";

const Stats = () => {
  const data = [
    {
      name: "",
      uv: 20,
      pv: 40,
      amt: 40,
    },
    {
      name: "",
      uv: 55,
      pv: 30,
      amt: 60,
    },
    {
      name: "",
      uv: 40,
      pv: 55,
      amt: 55,
    },
    {
      name: "",
      uv: 80,
      pv: 30,
      amt: 100,
    },
    {
      name: "",
      uv: 55,
      pv: 60,
      amt: 100,
    },
  ];

  const data02 = [
    {
      name: "Group A",
      value: 2400,
    },
    {
      name: "Group B",
      value: 4567,
    },
    {
      name: "Group C",
      value: 1398,
    },
    {
      name: "Group D",
      value: 9800,
    },
    {
      name: "Group E",
      value: 3908,
    },
    {
      name: "Group F",
      value: 4800,
    },
  ];

  return (
    <div className="stats-container">
      <Box
        sx={{
          p: 1,
          height: "300px",
          width: "250px",
          borderRadius: "20px",
          boxShadow: 4,
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
        }}
      >
        <div className="stats-header">
          <div className="title">User Activity</div>
          <select className="stats-select" name="activity" id="activity">
            <option value="week">Weekly</option>
            <option value="month">Monthly</option>
            <option value="year">Yearly</option>
          </select>
        </div>
        <div className="itemTitle">This Month</div>
        <div className="stats-counter">$25,547</div>
        <AreaChart
          className="activity-chart"
          width={250}
          height={150}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </Box>
      <Box
        sx={{
          p: 1,
          height: "300px",
          width: "250px",
          borderRadius: "20px",
          boxShadow: 4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="stats-header">
          <div className="title">User Activity</div>
          <div className="stats-dots">...</div>
        </div>
        <PieChart width={220} height={250}>
          <Pie
            data={data02}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={30}
            outerRadius={50}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </Box>
      <Box
        sx={{
          p: 1,
          height: "300px",
          width: "250px",
          borderRadius: "20px",
          boxShadow: 4,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="stats-header">
          <div className="title">User Activity</div>
          <select className="stats-select" name="activity" id="activity">
            <option value="week">Weekly</option>
            <option value="month">Monthly</option>
            <option value="year">Yearly</option>
          </select>
        </div>
        <div className="top-product">
          <div className="number">#1</div>
          <div className="product-data">
            <div className="itemTitle">Polo blue t-shirt</div>
            <div className="price">$25.4</div>
          </div>
          <div className="collection">3.82k</div>
        </div>
        <div className="top-product">
          <div className="number">#2</div>
          <div className="product-data">
            <div className="itemTitle">Hoodie for men</div>
            <div className="price">$25.4</div>
          </div>
          <div className="collection">3.82k</div>
        </div>
        <div className="top-product">
          <div className="number">#3</div>
          <div className="product-data">
            <div className="itemTitle">Red color cap</div>
            <div className="price">$25.4</div>
          </div>
          <div className="collection">2.82k</div>
        </div>
        <div className="top-product">
          <div className="number">#4</div>
          <div className="product-data">
            <div className="itemTitle">Pocket T-shirt</div>
            <div className="price">$25.4</div>
          </div>
          <div className="collection">2.82k</div>
        </div>
      </Box>
    </div>
  );
};

export default Stats;
