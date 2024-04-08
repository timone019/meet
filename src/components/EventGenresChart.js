// src/components/EventGenresChart.js

import { useState, useEffect } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell, Legend, Tooltip } from "recharts";
import PropTypes from "prop-types";

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);
  const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];

  useEffect(() => {

    const data = genres.map((genre) => {
      const filteredEvents = events.filter((event) =>
        event.summary.includes(genre)
      );
      return { name: genre, value: filteredEvents.length };
  });
    setData(data);
  }, [events, genres]);



const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const RADIAN = Math.PI / 180;  
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return percent ?(
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  ) : null
};



  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart width={730} height={250}>
        <Pie
          data={data}
          dataKey="value"
          labelLine={false}
          label={renderCustomizedLabel}
          cx="50%"
          cy="50%"
          outerRadius={150}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend layout="horizontal" align="center" verticalAlign="bottom" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }}/>
      </PieChart>
    </ResponsiveContainer>
  );
};

EventGenresChart.propTypes = {
  events: PropTypes.array.isRequired,
};


export default EventGenresChart;
