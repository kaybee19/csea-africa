import React, { useState } from "react";

// Material UI
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';

// Comps
import { dummy } from '../../util/data';
import SvgCircle from '../SvgCircle';

const useStyles = makeStyles((theme: Theme) => createStyles({
	...theme.spreadThis,
	progress: {
		maxWidth: '525px',
		 borderRadius: '16px',
		 height: '8px',
	},
	gridCont: {
		marginBottom: '2.5rem'
	},
	svg: {
		display: 'flex',
		position:'relative',
		justifyContent: 'center',
		'& > h5': {
			position: 'absolute',
			height: '100%',
			margin: 'auto',
			top: '100px',
			fontSize: '2rem'
		},
		'& > p': {
			position: 'absolute',
			margin: 'auto',
			bottom: '-60px',
			fontSize: '1.25rem'
		}
	}
}));


function CircularProgressWithLabel(props) {

	const colorCode = props.value/100 < 0.4 ? 'main' : (props.value/100 < 0.7 ? 'primary' : 'secondary');

  return (
  	<div className={`linerClass ${colorCode === 'main' && 'editClass'}`}>
      <CircularProgress size={125} thickness={2.75} color={colorCode === 'main' ? 'primary' : colorCode} variant="determinate" {...props} />
      <Typography variant="body1" className="progressText" color="textSecondary">
      	{(props.value/100).toFixed(3)}
      	<Typography variant='caption'>/1.0</Typography>
      </Typography>
    </div>
  );
}

export default function AllData(props) {

  const theme = useTheme();
  const classes = useStyles(props);

  const [country, setCountry] = useState({});
  const [progress, setProgress] = React.useState(0);
  const max = 65.87;

  React.useEffect(() => {
  	setProgress(max);
    // const timer = setInterval(() => {
    //   setProgress((prevProgress) => (prevProgress >= max ? max : prevProgress + 2.1));
    // }, 20);

    // let filter = dummy.filter((d, i) => d.country === props.country);
    // setCountry(filter);
    // let mine = country;
    // console.log(mine);

    setCountry({
    	a: (Math.random()*(1-.35)+.35)*100,
    	b: (Math.random()*(1-.35)+.35)*100,
    	c: (Math.random()*(1-.35)+.35)*100,
    	d: (Math.random()*(1-.35)+.35)*100,
    	e: (Math.random()*(1-.35)+.35)*100,
    	f: (Math.random()*(1-.35)+.35)*100
    })

  }, [props.country]);

	return (
		<div>
			{
				props.country === '' ? (
					<div className={classes.svg}>
						<h5>N/A</h5>
						<SvgCircle />
						<p>Please select a country to view the index</p>
					</div>
					) : (
					<Grid container>
						<Grid item xs={12} md={4} className={classes.gridCont}>
							<div className={classes.cont}>
								<Typography variant="body1">DPI</Typography>
								<Typography style={{ fontSize: '.6rem' }} variant="overline">1st</Typography>
							</div>
							<CircularProgressWithLabel className={classes.progress} value={country.a} />
						</Grid>
						<Grid item xs={12} md={4} className={classes.gridCont}>
							<div className={classes.cont}>
								<Typography variant="body1">EDU</Typography>
								<Typography style={{ fontSize: '.6rem' }} variant="overline">1st</Typography>
							</div>
							<CircularProgressWithLabel className={classes.progress} value={country.b} />
						</Grid>
						<Grid item xs={12} md={4} className={classes.gridCont}>
							<div className={classes.cont}>
								<Typography variant="body1">INFRA</Typography>
								<Typography style={{ fontSize: '.6rem' }} variant="overline">1st</Typography>
							</div>
							<CircularProgressWithLabel className={classes.progress} value={country.c} />
						</Grid>
						<Grid item xs={12} md={4} className={classes.gridCont}>
							<div className={classes.cont}>
								<Typography variant="body1">BUS</Typography>
								<Typography style={{ fontSize: '.6rem' }} variant="overline">1st</Typography>
							</div>
							<CircularProgressWithLabel className={classes.progress} value={country.d} />
						</Grid>
						<Grid item xs={12} md={4} className={classes.gridCont}>
							<div className={classes.cont}>
								<Typography variant="body1">ECON</Typography>
								<Typography style={{ fontSize: '.6rem' }} variant="overline">1st</Typography>
							</div>
							<CircularProgressWithLabel className={classes.progress} value={country.e} />
						</Grid>
						<Grid item xs={12} md={4} className={classes.gridCont}>
							<div className={classes.cont}>
								<Typography variant="body1">REG</Typography>
								<Typography style={{ fontSize: '.6rem' }} variant="overline">1st</Typography>
							</div>
							<CircularProgressWithLabel className={classes.progress} value={country.f} />
						</Grid>
					</Grid>
				)
			}			
		</div>
	);
}
