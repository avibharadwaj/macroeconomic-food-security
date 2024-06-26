import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";

export const data = [
  ["Year", "China", "India", "USA"],
  [1960.0, 0, 0, 0],
  [1961.0, 0, 0, 0],
  [1962.0, 0, 0, 0],
  [1963.0, 0, 0, 0],
  [1964.0, 0, 0, 0],
  [1965.0, 0, 0, 0],
  [1966.0, 0, 0, 0],
  [1967.0, 0, 0, 0],
  [1968.0, 0, 0, 0],
  [1969.0, 0, 0.072826324, 0.113667809],
  [1970.0, 0, 0.070763624, 0.066102932],
  [1971.0, 0, 0.024893934, 0.099287786],
  [1972.0, 0, 0.044331264, 0.135402869],
  [1973.0, 0, 0.057241382, 0.229090182],
  [1974.0, 0, -0.010486395, 0.137099799],
  [1975.0, 0, -0.007502573, 0.155331555],
  [1976.0, 0, -0.029682109, 0.140261482],
  [1977.0, 0, 0.0131755, 0.233883413],
  [1978.0, 4.49e-5, 0.03174683, 0.306394355],
  [1979.0, 0.029819636, 0.042484827, 0.585866342],
  [1980.0, 0.135296316, 0.047506181, 0.800738126],
  [1981.0, 0.209664357, 0.03591159, 0.634908483],
  [1982.0, 0.275698543, 0.002584047, 0.316452387],
  [1983.0, 0.483945715, 0.009068703, 0.624874152],
  [1984.0, 0.536046583, 0.045627777, 0.221941613],
  [1985.0, 0.623424606, 0.047283784, 0.675731298],
  [1986.0, 0.847702965, 0.076091199, 1.302414002],
  [1987.0, 1.022558946, 0.030766482, 1.086807482],
  [1988.0, 0.97565029, 0.085156734, 1.343240723],
  [1989.0, 0.966308311, 0.073740021, 1.194504107],
  [1990.0, 1.138837732, 0.02722554, 0.561047032],
  [1991.0, 2.613162193, 0.095941829, 0.464853987],
  [1992.0, 6.186882076, 0.197056163, 0.732369584],
  [1993.0, 5.987156294, 0.297385909, 0.767643589],
  [1994.0, 4.88044416, 0.594986258, 0.904218188],
  [1995.0, 4.651826651, 0.617479056, 1.209693103],
  [1996.0, 4.725334152, 0.860208566, 1.424065573],
  [1997.0, 4.435577102, 0.625285966, 2.329849229],
  [1998.0, 3.74900388, 0.472644846, 3.244314135],
  [1999.0, 3.475082246, 0.765212649, 3.405318336],
  [2000.0, 3.51300212, 1.056378305, 1.630116343],
  [2001.0, 3.609099885, 1.011571805, 1.015460357],
  [2002.0, 3.48740331, 0.605889255, 1.022023979],
  [2003.0, 3.483641114, 0.765601405, 1.749187307],
  [2004.0, 4.554254034, 0.88610072, 1.091876415],
  [2005.0, 4.508579016, 2.130168425, 2.160487842],
  [2006.0, 4.40096483, 2.073395746, 2.398397384],
  [2007.0, 3.73363489, 3.620521897, 2.318328109],
  [2008.0, 2.568888291, 2.651593127, 1.114843565],
  [2009.0, 4.0035629, 1.635034274, 1.761193112],
  [2010.0, 3.708828902, 2.002065552, 1.695323307],
  [2011.0, 2.827090556, 1.312934337, 1.545625032],
  [2012.0, 3.039875469, 1.516275965, 1.716613576],
  [2013.0, 2.559233447, 1.695658786, 1.436946698],
  [2014.0, 2.192181603, 2.092115758, 2.80417574],
  [2015.0, 1.55564215, 1.937363198, 2.53073398],
  [2016.0, 1.349132679, 1.507316581, 1.948643533],
  [2017.0, 1.693905294, 1.559263523, 1.039765408],
  [2018.0, 1.310718781, 1.763127508, 1.409955825],
  [2019.0, 0, 0, 0],
  [2020.0, 0, 0, 0],
];
export function FdiNetInflows(props) {
  const [chartData, setchartData] = useState([]);
  const range = useSelector((state) => state.countryRange.range);
  const country = useSelector((state) => state.countryRange.country);
  const filterData = () => {
    let filteredData = [["year", country]];
    let col = 0;
    if (country == "USA") {
      col = 3;
    } else if (country == "INDIA") {
      col = 1;
    } else if (country == "China") {
      col = 2;
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