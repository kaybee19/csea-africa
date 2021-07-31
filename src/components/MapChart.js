import React, { memo } from "react";
import {
	ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

// const rounded = num => {
//   if (num > 1000000000) {
//     return Math.round(num / 100000000) / 10 + "Bn";
//   } else if (num > 1000000) {
//     return Math.round(num / 100000) / 10 + "M";
//   } else {
//     return Math.round(num / 100) / 10 + "K";
//   }
// };

const MapChart = ({ setTooltipContent }) => {
  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{
          rotate: [-20, -1, 0],
          scale: 475
        }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies
                 .filter(d => d.properties.REGION_UN === "Africa")
                .map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties;
                    setTooltipContent(`${NAME}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#EAEAEC",
                      stroke: "white",
                      outline: "none",
                    },
                    hover: {
                      fill: "rgb(251, 171, 24)",
                      outline: "none"
                    },
                    pressed: {
                      fill: "rgb(251, 171, 24)",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
      </ComposableMap>
    </>
  );
};

export default memo(MapChart);
