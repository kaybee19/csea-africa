import React from 'react';

// Material UI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	...theme.spreadThis,
	cont: {
		width: '100%',
		position: 'absolute',
		bottom: '0px',
		right: 0,
		[theme.breakpoints.down('sm')]: {
			right: 'auto',
			position: 'relative',
			marginTop: '2rem'
		},
	},
	pad: {
		display: 'flex',
		justifyContent: 'center',
		[theme.breakpoints.up('md')]: {
			paddingRight: '2.75rem',
		},
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column'
		},
	},
	body: {
		display: 'flex',
		alignItems: 'center',
		marginRight: '1.5rem',
		[theme.breakpoints.down('sm')]: {
			marginTop: '1rem'
		}
	},
	box: {
		height: '1.5rem',
		width: '1.5rem',
		borderRadius: 4,
		marginRight: '.75rem',
	}
}));

export default function Legend(props) {

  const theme = useTheme();
  const classes = useStyles(props);

  const data = [
  	{ type: 'High', color: '#35BA83'},
  	{ type: 'Medium', color: '#009ab2'},
  	{ type: 'Low', color: '#FF9800'},
  ]

	return (
		<div className={classes.cont}>
			<div className={classes.pad}>
				{
					data.map((d, i) => (
						<span className={classes.body} key={i}>
							<div style={{ backgroundColor: d.color }} className={classes.box}></div>
							<Typography style={{ fontWeight: 500 }} variant="body1">{d.type}</Typography>
						</span>
					))
				}
			</div>
		</div>
	);
}
