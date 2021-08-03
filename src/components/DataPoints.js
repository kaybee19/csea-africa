import React, { useState, useEffect } from "react";

// Material UI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';

// Comps
import AllData from './Data/AllData';
import Legend from './Legend';

const useStyles = makeStyles((theme: Theme) => createStyles({
	...theme.spreadThis,
	formControl: {
		minWidth: '350px'
	},
	selectClass: {
		fontSize: '1.25rem',
		fontWeight: '300'
	},
	textHeader: {
		fontWeight: 300,
		fontSize: '1.5rem',
		margin: '1.5rem 0'
	}
}));

export default function Navbar(props) {

  const theme = useTheme();
  const classes = useStyles(props);
  // const matches = useMediaQuery(theme.breakpoints.up('md'));

  const [number, setNumber] = useState('');
  const [country, setCountry] = useState('')

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const textMarkup = number === '' ? 'Index Points' : (
  	number === 1 ? 'D.P.I' : (
  		number === 2 ? 'E.D.U' : (
  			number === 3 ? 'I.N.F.R.A' : (
  				number === 4 ? 'B.U.S' : (
  					number === 5 ? 'E.C.O.N' : (
  						number === 6 ? 'R.E.G' : null
  						)
  					)
  				)
  			)
  		)
  	);

	React.useEffect(() => {
		setCountry(props.content);
    return () => {
      console.log("Unmount")
    }
	}, [props.content]);


	return (
		<div>
      <FormControl className={classes.formControl}>
        <Select
        	className={classes.selectClass}
        	autoWidth={true}
          labelId="data-point-select"
          id="dp-select"
          value={number}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Without label' }}
          displayEmpty
        >
        	<MenuItem value=''>Show All</MenuItem>
          <MenuItem value={1}>DPI</MenuItem>
          <MenuItem value={2}>EDU</MenuItem>
          <MenuItem value={3}>INFRA</MenuItem>	
          <MenuItem value={4}>BUS</MenuItem>
          <MenuItem value={5}>ECON</MenuItem>
          <MenuItem value={6}>REG</MenuItem>
        </Select>
      </FormControl>
      <Grid>
      	<Typography className={classes.textHeader} variant='body1'>{country !== null ? country : props.content} {textMarkup} {number !== '' && 'Index'}</Typography>
      	<div>
					<AllData country={props.content} />      		
      	</div>
      </Grid>
      { props.content !== '' && <Legend /> }
		</div>
	);
}

