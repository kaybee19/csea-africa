import React, { useState } from "react";

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
	...theme.spreadThis,
	selectClass: {
		marginBottom: '2rem',
		[theme.breakpoints.down('xs')]: {
			marginLeft: '1rem'
		}
	},
	dropdown: {
		'& .MuiSelect-selectMenu': {
			padding: '.5rem',
			width: '5rem',
			color: '#337AB7!important',
			background: '#F3F8FC',
			fontWeight:'600',
			border: '1px solid #337AB7',
		}
	}
}));

export default function SelectType(props) {

  const theme = useTheme();
  const classes = useStyles(props);
  const [type, setType] = useState('DPI');

  const handleChange = (event) => {
    setType(event.target.value);
    props.getType(event.target.value);
  };

	return (
		<div className={classes.selectClass}>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={type}
          onChange={handleChange}
          className={classes.dropdown}
          displayEmpty
        >
          <MenuItem value='DPI'>DPI</MenuItem>
          <MenuItem value='EDU'>EDU</MenuItem>
          <MenuItem value='INFRA'>INFRA</MenuItem>
          <MenuItem value='BUS'>BUS</MenuItem>
          <MenuItem value='ECON'>ECON</MenuItem>
          <MenuItem value='REG'>REG</MenuItem>
        </Select>
      </FormControl>			
		</div>
	);
}
