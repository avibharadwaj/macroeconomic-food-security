import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";

export const data = [['Year', 'China', 'India', 'USA'],
[1986, 70, 55710, 107870],
[1987, 0, 75325, 101946],
[1988, 0, 62795, 88207],
[1989, 0, 113147, 42181],
[1998, 0, 531262, 120777],
[2000, 23, 618930, 128651],
[2001, 0, 475579, 110372],
[2002, 0, 463150, 58822],
[2003, 0, 474959, 44161],
[2004, 147, 778178, 73273],
[2005, 122, 740243, 88134],
[2006, 233, 705847, 76568],
[2007, 669, 657309, 104884],
[2009, 0, 793521, 108085],
[2010, 358, 819364, 105540],
[2011, 1116, 709973, 125234],
[2012, 962, 847376, 121329],
[2013, 236, 859098, 125962],
[2014, 998, 1046542, 103726],
[2015, 607, 1206994, 102997],
[2016, 234, 914922, 112782],
[2017, 962, 827446, 125507],
[2018, 1852, 968660, 90510],
[2019, 924, 1045884, 103685],
[2020, 2508, 1199521, 112894]];

export function saudiRice(props){
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