import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";

export const data = [
  ["Year", "China", "Egypt, Arab Rep", "India", "Saudi Arabia", "USA"],
  [1960.0, 0, 0, 0, 0, 0],
  [1961.0, 193.6170213, 183.3710501, 153.9834046, 0, 92.01639943],
  [1962.0, 175.1504425, 169.9104096, 160.0741963, 0, 93.6281842],
  [1963.0, 160.2827763, 189.3618626, 166.3954086, 0, 92.34558449],
  [1964.0, 141.3996627, 174.6360197, 206.6109077, 0, 92.10360745],
  [1965.0, 136.4064955, 176.2006158, 219.9675347, 0, 90.53684095],
  [1966.0, 142.7091328, 137.3214712, 242.0497031, 0, 93.20078283],
  [1967.0, 146.4964693, 141.5427275, 252.4192226, 0, 94.64234941],
  [1968.0, 200.5952381, 163.2707857, 226.835867, 0, 97.61474177],
  [1969.0, 174.7484909, 196.3165291, 207.6915016, 0, 97.56266306],
  [1970.0, 167.2485769, 193.5698713, 212.7663587, 20.43478261, 96.38804326],
  [1971.0, 141.8577198, 192.1568627, 214.3444937, 7.228358295, 98.07013032],
  [1972.0, 132.6390293, 156.6293951, 199.8772386, 3.643478261, 96.44816468],
  [1973.0, 132.5612014, 307.1230068, 206.5264843, 13.907743, 96.452858],
  [1974.0, 124.6523586, 219.5696721, 169.5414416, 9.931761787, 96.63358714],
  [1975.0, 123.075265, 220.2654478, 191.1582864, 9.316770186, 97.88602376],
  [1976.0, 115.9263272, 204.0011329, 145.6002045, 8.451993249, 102.153906],
  [1977.0, 120.9228121, 191.5904298, 160.3149724, 8.629310345, 101.2129065],
  [1978.0, 120.2435649, 184.9323481, 173.0522766, 11.92676475, 94.64398848],
  [1979.0, 119.1258025, 169.276889, 175.4767214, 15.93381818, 92.39780256],
  [1980.0, 121.0048292, 131.0042806, 183.0532028, 26.95, 91.10412705],
  [1981.0, 118.6384278, 118.2609422, 148.0293889, 42.48204159, 104.9164356],
  [1982.0, 122.6189319, 96.37981472, 132.3514811, 59.13111669, 97.35724734],
  [1983.0, 129.6256618, 103.2939633, 145.0326086, 80.79346602, 94.55636407],
  [1984.0, 131.860216, 106.5595716, 152.2496671, 65.89152758, 88.43471256],
  [1985.0, 125.165702, 100.6410256, 150.1416794, 81.52028158, 101.7096706],
  [1986.0, 121.1980438, 118.3118406, 135.5644178, 94.4626828, 81.85634361],
  [1987.0, 132.9475541, 118.8714807, 116.2623306, 100.5686347, 77.47429597],
  [1988.0, 142.4683943, 113.2692308, 119.2327591, 108.5055929, 75.84208096],
  [1989.0, 138.5053434, 106.8427273, 132.1186771, 113.6788049, 79.18593958],
  [1990.0, 142.3656531, 111.7232091, 132.5024934, 86.16740088, 76.84509263],
  [1991.0, 147.9987625, 98.00670197, 128.7514621, 63.65914787, 73.01668028],
  [1992.0, 140.7079893, 96.38967953, 124.3916894, 60.10489901, 73.84392824],
  [1993.0, 126.0815388, 99.93850797, 135.2755684, 47.25308963, 78.09502708],
  [1994.0, 134.7472655, 80.14172467, 129.2829378, 30.0400534, 75.90992],
  [1995.0, 140.3593068, 94.34744552, 122.3239122, 24.69994782, 77.30150959],
  [1996.0, 132.8667244, 94.7993448, 128.1567469, 26.56276186, 74.94354603],
  [1997.0, 132.9052679, 94.70134317, 122.9849385, 29.15796167, 83.46689798],
  [1998.0, 125.9136913, 91.13836576, 122.8659943, 27.12254459, 84.86115541],
  [1999.0, 123.6014028, 82.07501218, 126.0896844, 28.25652363, 95.38296207],
  [2000.0, 119.973872, 86.25665465, 113.6874603, 26.86496564, 106.1527956],
  [2001.0, 118.1251874, 73.83574562, 118.5945931, 25.64212214, 102.8112413],
  [2002.0, 126.6816675, 76.46846392, 113.401275, 23.56878474, 109.3108222],
  [2003.0, 113.2319939, 79.35037986, 119.9610551, 24.19661171, 126.1506592],
  [2004.0, 110.5477872, 87.34625014, 121.4863244, 26.00026065, 122.7580813],
  [2005.0, 115.1949271, 83.55026706, 132.8960089, 21.04728586, 120.3749477],
  [2006.0, 110.0687809, 76.71541543, 152.5510538, 20.96952544, 124.8980668],
  [2007.0, 101.1678361, 52.58000282, 172.230339, 17.37043723, 120.4238861],
  [2008.0, 98.62345881, 47.13551847, 188.9650179, 10.46432616, 122.9175878],
  [2009.0, 96.10379603, 46.95668, 181.2310086, 9.849906191, 122.63736],
  [2010.0, 93.47178232, 42.77267581, 171.4917641, 8.899607972, 119.5191881],
  [2011.0, 93.93347402, 45.64780171, 171.1962371, 8.244243421, 129.1715603],
  [2012.0, 94.41666903, 45.02206762, 159.5402789, 6.332453826, 131.4242682],
  [2013.0, 93.16043396, 43.97296465, 149.517842, 7.967150155, 134.7097975],
  [2014.0, 87.89423269, 42.45452839, 154.5461136, 9.419072252, 133.2838045],
  [2015.0, 85.22610059, 62.4021118, 149.4416731, 8.383807932, 129.4890092],
  [2016.0, 88.13968095, 75.78026285, 144.72852, 7.911448902, 127.1828083],
  [2017.0, 90.06735858, 51.63632963, 146.530556, 6.814742495, 125.0855204],
  [2018.0, 90.06261805, 40.32470061, 152.7011876, 6.814742495, 118.1038928],
  [2019.0, 0, 0, 0, 0, 0],
  [2020.0, 0, 0, 0, 0, 0],
];

export function FertilizersProductionChart(props) {
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