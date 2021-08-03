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
import DataPoints from "./DataPoints";

const useStyles = makeStyles((theme: Theme) => createStyles({
	...theme.spreadThis,
	cont: {
		position: 'relative',
		margin: '2.5rem 0'
	}
}));

export default function Navbar(props) {

  const theme = useTheme();
  const classes = useStyles(props);
  // const matches = useMediaQuery(theme.breakpoints.up('md'));

  const [content, setContent] = useState('');
  const [country, setCountry] = useState('')

	React.useEffect(() => {
  	const element = document.getElementsByClassName('rsm-geographies');

		element[0].onclick = () => {
			setCountry(content)
		}
	}, [content]);


	return (
		<Container className={classes.cont} maxWidth="xl">
			<Grid container>
				<Grid item xs={12} md={6}>
					 <DataPoints content={country} />
				</Grid>
				<Grid item xs={12} md={6}>
		      <MapChart setTooltipContent={setContent} />
		      <ReactTooltip>{content}</ReactTooltip>
				</Grid>
			</Grid>
		</Container>
	);
}

