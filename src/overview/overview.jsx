import "./overview.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Overview = () => {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
    },
  ];

  return (
    <div className="overview-container">
      <div className="overview-left">
        Overview
        <div className="overview-data">
          <div className="overview-desc">This Month</div>
          <div className="overview-counter">
            <span>$24,544</span>
            <span className="perc overview-positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <span>$ 9,574</span>
            </span>
          </div>
        </div>
        <div className="data-row">
          <div className="data-items">
            <div className="overview-item">
              <div className="overview-desc">Orders</div>
              <div className="value">5,643</div>
            </div>
            <div className="overview-item">
              <div className="overview-desc">Sales</div>
              <div className="value">15,645</div>
            </div>
          </div>
          <div className="data-items">
            <div className="overview-item">
              <div className="overview-desc">Order Value</div>
              <div className="value">17.03%</div>
            </div>
            <div className="overview-item">
              <div className="overview-desc">Customers</div>
              <div className="value">51,545</div>
            </div>
          </div>
          <div className="data-items">
            <div className="overview-item">
              <div className="overview-desc">Income</div>
              <div className="value">$75,249</div>
            </div>
            <div className="overview-item">
              <div className="overview-desc">Expanses</div>
              <div className="value">$12,485</div>
            </div>
          </div>
        </div>
      </div>
      <div className="overview-right">
        <BarChart className="chart" width={500} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default Overview;
