import React from 'react';

// Material UI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	...theme.spreadThis,
	body: {
		display: 'flex',
		alignItems: 'center',
		margin: '1rem',
	},
	box: {
		height: '1rem',
		width: '1rem',
		marginRight: '.5rem'
	}
}));

export default function Legend(props) {

  const theme = useTheme();
  const classes = useStyles(props);

  const data = [
  	{ type: 'Low', color: '#3f51b5'},
  	{ type: 'Medium', color: '#0e98b9'},
  	{ type: 'High', color: '#6ebe4a'},
  ]

	return (
		<div style={{ display: 'flex' }}>
			{
				data.map((d, i) => (
					<span className={classes.body} key={i}>
						<div style={{ backgroundColor: d.color }} className={classes.box}></div>
						<Typography variant="overline">{d.type}</Typography>
					</span>
				))
			}
		</div>
	);
}
