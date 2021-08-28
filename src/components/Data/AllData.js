import React, { useState } from "react";

// Material UI
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';

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
		marginBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
	},
	svg: {
		marginTop: '2.5rem',
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
	},
	title: {
		fontWeight: '700',
		margin: '20% auto 1rem',
		[theme.breakpoints.down('sm')]: {
			margin: '10% auto 1rem',
		}
	}
}));


function CircularProgressWithLabel(props) {


	let countryFilter = dummy.filter(fil => fil.country === props.cont);
	let valueFilter = countryFilter.length !== 0 && countryFilter[0][props.d];
	let colorCode = countryFilter.length !== 0 && valueFilter['value'] <= 0.35 ? 'main' : (valueFilter['value'] <= 0.6 ? 'primary' : 'secondary');
	let borderWidth = props.data.length === 1 ? 'single' : ((props.data.length === 2) ? 'two' : 'more');
	let borderColor = countryFilter.length !== 0 && colorCode === 'main' ? '#FFF9F0' : (colorCode === 'primary' ? '#ebf8fa' : '#F3FCF8');

  return (
  	countryFilter.length === 0 ?
  	<div className='textHeader'>
  		<InfoIcon style={{ color: '#F26419', fontSize: '2rem', marginRight: '.5rem' }} />
	  	<Typography variant='body1'>
	  		Data not available for selected country!
	  	</Typography>
  	</div>
  	:
  	<div className={`linerClass ${colorCode === 'main' && 'editClass'} ${borderWidth}`}>
      <CircularProgress size={props.size} color={colorCode} style={{borderColor: `${borderColor}`}} thickness={3} variant="determinate" value={valueFilter['value']*100} {...props} />
      <Typography variant="body1" className="progressText" color="textSecondary">
      	{(valueFilter['value'])}
      	<Typography variant='caption'>/1.0</Typography>
      </Typography>
    </div>
  );
}

export default function AllData(props) {

  const theme = useTheme();
  const classes = useStyles(props);
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  const [country, setCountry] = useState({});
  const [count, setCount] = useState();
  const [data, setData] = useState()

  React.useEffect(() => {
  }, [props.country]);

  React.useEffect(() => {
  	setCount(props.data.length);
  	setData(props.data)
  }, [props.data]);

	return (
		<div>
			{
				props.country === '' ? (
					<div className={classes.svg}>
						<SvgCircle />
						<h5 style={{display: 'flex', justifyContent: 'center', marginRight: '1.5rem'}}>N/A</h5>
					</div>
					) : (
					<Grid justify="center" container>
						{
							data.map((d, i) => (
								<Grid item xs={6} md={count === 1 ? 12 : ((count === 2 || count === 4) ? 6 : 4)} className={classes.gridCont} key={i}>
									{count > 1 && <Typography className={classes.title} variant="h5">{d}</Typography>}
									<CircularProgressWithLabel className={classes.progress} data={data} d={d} size={count === 1 ? 250 : (count === 2 ? 160 : 125)} cont={props.country} />
								</Grid>
							)
						)}
					</Grid>
				)
			}			
		</div>
	);
}
