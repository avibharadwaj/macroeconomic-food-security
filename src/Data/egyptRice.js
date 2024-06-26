import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";

export const data = [['Year', 'China', 'India', 'USA'],
 [1991, 0, 0, 1],
 [1992, 0, 4, 18],
 [1993, 0, 53, 0],
 [1994, 0, 40, 87],
 [1995, 0, 64, 37],
 [1996, 42, 83, 77],
 [1998, 20, 517, 37],
 [1999, 5281, 461, 38],
 [2000, 21, 462, 183],
 [2001, 0, 684, 0],
 [2002, 0, 660, 116],
 [2003, 0, 791, 81],
 [2004, 36, 1239, 133],
 [2005, 101, 2107, 65],
 [2006, 84, 3219, 79],
 [2007, 21, 114585, 50],
 [2009, 488, 9291, 160],
 [2011, 363, 9186, 13472],
 [2013, 1, 10868, 819],
 [2014, 0, 23768, 27],
 [2016, 2750, 105226, 6],
 [2017, 38, 49238, 1],
 [2018, 32672, 29165, 19],
 [2019, 425186, 61402, 0],
 [2020, 16699, 49898, 22]];

 export function EgyptRice(props){
    const [chartData, setchartData] = useState([]);
    const range = useSelector((state) => state.countryRange.range);
    const country = useSelector((state) => state.countryRange.country);
    const filterData = () => {
      let filteredData = [["year", country]];
      let col = 0;
      if (country == "USA") {
        col = 6;
      } else if (country == "INDIA") {
        col = 4;
      } else if (country == "China") {
        col = 1;
      } else {
        setchartData(data);
        return;
      }
      let startYear = range[0];
      let endYear = range[1];
      for (let i = 1; i < data.length; i++) {
        let currYear = data[i][0];
        if (currYear <= endYear && currYear >= startYear) {
          filteredData.push([currYear, data[i][col]]);
        }
      }
      setchartData(filteredData);
    };
  
    useEffect(() => {
      console.log(range, country);
      filterData();
    }, [range, country]);
  
    return (
      <div style={{ marginBottom: "20px" }}>
        <Chart
          chartType="LineChart"
          width="100%"
          height="250px"
          data={chartData}
          options={{
            hAxis: {
              format: "#", // Use 'decimal' format to display integers without commas
            },
          }}
        />
      </div>
    );
 }