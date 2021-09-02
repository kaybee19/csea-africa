import React, { useEffect, memo } from "react";
import {
	ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
import { dummy } from '../util/data'


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

const MapChart = (props) => {

  const theme = useTheme();
  const classes = useStyles(props);
  const matchMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchXS = useMediaQuery(theme.breakpoints.down('xs'));

  const setTooltipContent = props.setTooltipContent;

  const handleClass = (e) => {

    const el = document.getElementsByClassName('map-class');
    el.length !== 0 && [...el].forEach(d => d.classList.toggle('map-class'));

    e.target.classList.add('map-class')
  }

  useEffect(() => {

  }, [])

  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{
          rotate: [(matchXS ? -43.5 : (matchSM ? -20 : (matchMD ? -30.5 : -22.5))), -1, 0],
          scale: (matchXS ? 275 : (matchSM ? 400 : (matchMD ? 275 : 315)))
        }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies
                .filter(d => d.properties.REGION_UN === "Africa")
                .map(geo => (
                dummy.filter(fil => geo.properties.NAME === fil.country).length !== 0 ?
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
                  onClick={((e) => handleClass(e))}
                  style={{
                    default: {
                      fill: "rgba(224, 230, 235, .75)",
                      stroke: "darkslategrey",
                      outline: "none",
                    },
                    hover: {
                      fill: "#327ab7",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#327ab7",
                      outline: "none"
                    }
                  }}
                /> :
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  className='pointerClass'
                  style={{
                    default: {
                      fill: "white",
                      stroke: "darkslategrey",
                      outline: "none",
                    },
                    hover: {
                      fill: "white",
                      stroke: "darkslategrey",
                      outline: "none"
                    },
                    pressed: {
                      fill: "none",
                      outline: "darkslategrey"
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