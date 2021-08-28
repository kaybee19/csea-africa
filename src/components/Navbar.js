import React from 'react';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import GetAppIcon from '@material-ui/icons/GetApp';
import ShareIcon from '@material-ui/icons/Share';

// Comps
import logo from '../assets/logo.png';

const useStyles = makeStyles((theme: Theme) => createStyles({
	...theme.spreadThis,
	menuBar: {
		paddingLeft: '1rem',
		paddingRight: '1rem',
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
	},
	aClass: {
		textAlign: 'center',
		textDecoration: 'none',
		display: 'flex',
		justifyContent: 'flex-end',
		flexDirection: 'column',
		minWidth: '76px',
    [theme.breakpoints.down('xs')]: {
    	display: 'none'
    }
	},
	pClass: {
		margin: '0!important',
		color: 'initial'
	},
	downloadClass: {
		fontSize: '1.2rem',
		backgroundColor: '#337ab7',
		color: 'white',
		padding: '.2rem',
		borderRadius: '50%',
		margin: '0 1.5rem .25rem'
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
						<div style={{ marginLeft: 'auto', display: 'flex' }}>
							<a className={classes.aClass} href="#">
								<GetAppIcon className={classes.downloadClass} color='primary' />
								<Typography variant="caption" className={classes.pClass}>Download</Typography>
							</a>
							<a className={classes.aClass} href="#">
								<ShareIcon style={{color: '#337ab7', fontSize: '1.75rem', margin: '0 1.5rem'}} />
								<Typography variant="caption" className={classes.pClass}>Share</Typography>
							</a>
							<a className={classes.aClass} href="#">
								<InfoIcon style={{color: '#337ab7', fontSize: '1.75rem', margin: '0 1.5rem'}} />
								<Typography variant="caption" className={classes.pClass}>Info</Typography>
							</a>
						</div>
					</div>
				</Container>
			</AppBar>
		</div>
	);
}

