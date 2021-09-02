import React, { useState } from "react";

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	...theme.spreadThis,
	body: {
		marginBottom: '4rem',
		[theme.breakpoints.down('sm')]: {
			padding: '0 3rem'
		},
		[theme.breakpoints.down('xs')]: {
			padding: '0 1rem'
		}
	},
	linkCLass: {
		textDecoration: 'underline',
		color: '#337AB7',
		cursor: 'pointer',
		'&:hover': {
			textDecoration: 'none',
		}
	}
}));

export default function Glossary (props) {

  const theme = useTheme();
  const classes = useStyles(props);

	return (
		<div className={classes.body}>
			<Grid>
				<Typography variant="h6">Information</Typography>
				<hr style={{marginBottom: '1.5rem'}} />
				<Typography style={{margin: '.75rem 0'}} variant="subtitle1"><a className={classes.linkCLass}>Glossary</a></Typography>
				<Typography style={{margin: '.75rem 0'}} variant="subtitle1"><a className={classes.linkCLass}>Methodology</a></Typography>
				<Typography style={{margin: '.75rem 0'}} variant="subtitle1"><a className={classes.linkCLass}>Download</a></Typography>
				<Typography style={{margin: '.75rem 0'}} variant="subtitle1"><a className={classes.linkCLass}>Share</a></Typography>
			</Grid>
		</div>
	);
}
