import React, { useState, useEffect } from "react";

// Material UI
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import StopIcon from '@material-ui/icons/Stop';
import InfoIcon from '@material-ui/icons/Info';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';

// Comps
import AllData from './Data/AllData';
import Legend from './Legend';
import { text, dummy } from '../util/data'

const useStyles = makeStyles((theme: Theme) => createStyles({
	...theme.spreadThis,
	formControl: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      left: '0',
      right: '0',
      position: 'absolute',
      top: '0',
      width: 'auto',
      padding: '0 3.25rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0 1rem',
    },
	},
	selectClass: {
    minWidth: '450px',
		fontSize: '1.25rem',
		fontWeight: '300',
    [theme.breakpoints.down('sm')]: {
     maxWidth: '47.5%',
     minWidth: '47.5%',
     '&:last-child': {
      display: 'block!important',
      '& > .MuiInput-input': {
        width: 'auto'
      }
     }
    },
	},
	textHeader: {
		fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
		fontSize: '1.1rem',
		margin: '3.5rem 0 0'
	}
}));

export default function Navbar(props) {

  const theme = useTheme();
  const classes = useStyles(props);
  // const matches = useMediaQuery(theme.breakpoints.up('md'));

  const points = [
    'DPI', 'EDU', 'INFRA', 'BUS', 'ECON', 'REG'
  ]

  const [country, setCountry] = useState('')
  const [data, setData] = useState([]);

  const handleCheck = (event) => {
    setData(event.target.value);
  };

  const handleSelect = (event) => {
    setCountry(event.target.value);
    props.handleUpdate(event.target.value)
  };

  const handleScroll = () => {

    let formPos = document.querySelector('#formControl').getBoundingClientRect();
    let css = window.document.styleSheets[0];
    css.insertRule(`#menu- .MuiMenu-paper { top: ${formPos['y']+60}px!important; }`, css.cssRules.length);

  }

  const textMarkup = `Select ${data.length === 0 ? 'an index point and' : ''} a country to display data`;

	React.useEffect(() => {
		setCountry(props.content);

    if (props.content !== '' && data.length === 0) {
      setData(['DPI'])
    }

	}, [props.content]);

	return (
		<div>
      <div onMouseOver={handleScroll} className={classes.formControl} id="formControl">
        <Select
        	className={classes.selectClass}
        	autoWidth={true}
          labelId="mutiple-checkbox-label"
          id="mutiple-checkbox"
          multiple
          value={data}
          onChange={handleCheck}
          input={<Input />}
          displayEmpty
          renderValue={(selected) => {
            if (selected.length === 0) {
              return '-- Select --'
            }
            else {
              return selected.join(', ')
            }
          }}
        >
          {points.map((d) => (
            <MenuItem key={d} value={d}>
              <Checkbox checkedIcon={<StopIcon />} checked={data.indexOf(d) > -1} />
              <ListItemText primary={d} />
            </MenuItem>
          ))}
        </Select>
        <Select
          className={classes.selectClass}
          style={{display: 'none'}}
          autoWidth={true}
          labelId="select-country"
          id="select-country"
          value={country}
          onChange={handleSelect}
          displayEmpty
          renderValue={() => (country === '') ? '-- Select Country --' : country }
        >
          {
            dummy.map((d, i) => (
            <MenuItem key={i} value={d.country}>{d.country}</MenuItem>
          ))
          }
        </Select>
      </div>
      <Grid>
        {
          data.length === 1 &&
          text.filter(fil => fil.name === data[0]).map(m => (
            <div className={classes.filter}>
              <Typography style={{fontWeight: 'bold', margin: '2.5rem auto 1rem'}} variant='h5'>{m.name}</Typography>
              <Typography style={{lineHeight: '1.45rem', color: '#627C93'}} variant='body2'>{m.text}</Typography>
            </div>
          ))
        }
        {
          country !== '' ? (
            <span>
              <Typography style={{ marginTop: '3rem', marginBottom: '1.5rem', fontSize: '2rem' }}>{country}</Typography>
              {
                (
                  data.length === 0 && country !== '') &&
                  (<>
                    <Typography style={{ marginTop: '2rem' }} variant='body2'>{
                      dummy.filter(fil => fil.country === country)[0]['desc']
                    }</Typography>
                    <Typography className={classes.textHeader} variant='body1'><InfoIcon style={{ color: '#F26419', fontSize: '2rem', marginRight: '.5rem' }} />{textMarkup}</Typography>
                  </>
                )
              }
            </span>
            )
          : (
            (data.length === 0 || data.length > 1) &&
            <Typography className={classes.textHeader} variant='body1'><InfoIcon style={{ color: '#F26419', fontSize: '2rem', marginRight: '.5rem' }} />{textMarkup}</Typography>
          )
        }
      	<div>
					<AllData data={data} country={country} />
      	</div>
      </Grid>
      { data.length !== 0 ? <Legend /> : ((country !== '' && data.length !== 0) && <Legend />) }
		</div>
	);
}

