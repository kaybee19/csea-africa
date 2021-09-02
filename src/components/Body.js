import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

// Material UI
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';

// Comps
import MapChart from "./MapChart";
import MapBack from "./MapBack";
import DataPoints from "./DataPoints";
import Glossary from './Glossary';
import Table from './Table';
import SelectType from './SelectType';
import { dummy } from '../util/data';

const useStyles = makeStyles((theme: Theme) => createStyles({
	...theme.spreadThis,
	cont: {
		position: 'relative',
		margin: '2.5rem 0rem',
		padding: '0 3.25rem',
		overflow: 'hidden',
		[theme.breakpoints.down('sm')]: {
			padding: '0 0rem',
		}
	},
	gridCont: {
		paddingBottom: '3rem',
		order: 1,
		[theme.breakpoints.up('md')]: {
			position: 'relative',
			paddingRight: '2.75rem',
			order: 0,
		},
		[theme.breakpoints.down('sm')]: {
			padding: '0 3.25rem',
		},
		[theme.breakpoints.down('xs')]: {
			padding: '0 1rem',
		}
	},
	gridBottom: {
		position: 'relative',
		marginTop: '3rem',
		// overflow: 'hidden',
		[theme.breakpoints.down('sm')]: {
			marginTop: '7.5rem',
		}
	},
}));

export default function Navbar(props) {

  const theme = useTheme();
  const classes = useStyles(props);
  const matchMD = useMediaQuery(theme.breakpoints.up('md'));
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [content, setContent] = useState('');
  const [country, setCountry] = useState('');
  const [type, setType] = useState('DPI');

  const handleType = (t) => {
  	setType(t)
  }

  const handleUpdate = (d) => {
  	// setContent(d);

  	const id = dummy.filter(fil => fil.country === d)[0]['id'];

  	const arr = document.getElementsByClassName('rsm-geography');
  	arr.length !== 0 && [...arr].forEach(d => d.classList.remove('map-class'));

    id !== '' && arr[id-1].classList.add('map-class');
  }

  const getType = (t) => {
  	setType(t)
  }

	React.useEffect(() => {
  	const element = document.getElementsByClassName('rsm-geographies');

		element[0].onclick = () => {
			setCountry(content)
		}
	}, [content]);

	return (
		<Container className={classes.cont} maxWidth="xl">
			<Grid justify='space-between' container>
				<Grid className={classes.gridCont} item xs={12} md={6} lg={5}>
					 <DataPoints handleUpdate={handleUpdate} content={country} />
				</Grid>
				<Grid item xs={12} md={6} lg={7} className={classes.gridBottom}>
		      {!matchSM && <ReactTooltip>{content}</ReactTooltip>}
		      <MapChart setTooltipContent={setContent} />
		      <MapBack />
				</Grid>
			</Grid>
			<Grid justify='space-between' container style={{ padding: '4rem 0' }}>
				<Grid item xs={12} md={3}>
					<Glossary />
				</Grid>
				<Grid className='padFix' item xs={12} md={8}>
					<SelectType getType={getType} />
					<Table type={type} />
				</Grid>
			</Grid>
		</Container>
	);
}

