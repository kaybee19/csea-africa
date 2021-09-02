import React, { memo } from "react";
import {
	ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  ...theme.spreadThis,
}));

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

const MapBack = (props) => {

  const theme = useTheme();
  const classes = useStyles(props);
  const matchMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{
          rotate: [(matchXS ? -43.5 : (matchSM ? -20 : (matchMD ? -30.5 : -22.5))), -1, 0],
          scale: (matchXS ? 275 : (matchSM ? 400 : (matchMD ? 275 : 315)))
        }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies
                .filter(d => d.properties.REGION_UN !== "Africa")
                .map(geo => (
                <Geography
                  geography={geo}
                  style={{
                    default: {
                      fill: "transparent",
                      stroke: "lightgray",
                      outline: "none",
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

export default memo(MapBack);