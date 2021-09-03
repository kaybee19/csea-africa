import React, { useState } from "react";

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';

// Comps
import Share from './Share';
import dpiDoc from '../util/DPI Methodology.pdf';
import dpiSheet from '../util/Data - Digital Preparedness Index.xlsx';

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
				<Typography style={{margin: '.75rem 0'}} variant="subtitle1"><a download href={dpiDoc} className={classes.linkCLass}>Methodology</a></Typography>
				<Typography style={{margin: '.75rem 0'}} variant="subtitle1"><a download href={dpiSheet} className={classes.linkCLass}>Download</a></Typography>
				<Share />
			</Grid>
		</div>
	);
}
