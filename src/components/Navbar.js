import React from 'react';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

// Comps
import logo from '../assets/logo.png';

const useStyles = makeStyles((theme: Theme) => createStyles({
	...theme.spreadThis,
	menuBar: {
		boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 10%), 0px 4px 5px 0px rgb(0 0 0 / 4%), 0px 1px 10px 0px rgb(0 0 0 / 2%)!important',
	},
	menu: {
		display: 'flex',
		alignItems: 'center',
	},
	logo: {
		width: '150px',
		padding: '.75rem 0',
	},
	logoText: {
		textTransform: 'capitalize',
		fontWeight: '300',
		letterSpacing: '-.5px',
		fontSize: '28px',
		color: '#7f8285',
		fontFamily: "'Lato', sans-serif!important"
	}
}));

export default function Navbar(props) {

  const theme = useTheme();
  const classes = useStyles(props);
  // const matches = useMediaQuery(theme.breakpoints.up('md'));

	return (
		<div>
			<AppBar color="inherit" position="static" className={classes.menuBar}>
				<Container maxWidth="xl">
					<div className={classes.menu}>
						<a className={classes.linkClass} href="/"><img src={logo} alt="csea-logo" className={classes.logo} /></a>
						<a className={classes.linkClass} style={{ marginLeft: '1rem' }} href="/"><Typography variant="caption" className={classes.logoText}>digital preparedness index 2021</Typography></a>
						<div style={{ marginLeft: 'auto' }}>
							<a href="#"><CloudDownloadIcon style={{fontSize: '2rem', margin: '0 1rem'}} color='primary' /></a>
							<a href="#"><InfoIcon style={{fontSize: '2rem', margin: '0 1rem'}} color='primary' /></a>
						</div>
					</div>
				</Container>
			</AppBar>
		</div>
	);
}

