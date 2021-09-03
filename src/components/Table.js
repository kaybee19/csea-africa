import React, { useState, useEffect } from "react";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withStyles, makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';

// Comps
import { dummy } from '../util/data';


const useStyles = makeStyles((theme: Theme) => createStyles({
	...theme.spreadThis,
	paper: {
		[theme.breakpoints.down('xs')]: {
			boxShadow: 'none!important'
		}
	},
	smBody: {
		[theme.breakpoints.down('xs')]: {
			display: 'grid!important'
		}
	},
	btnClass: {
		display: 'flex',
		marginLeft: 'auto',
		padding: '8px',
		fontSize: '.75rem',
		textTransform: 'capitalize',
		fontWeight: '600',
		color: 'white',
		backgroundColor: '#FF9800',
		marginTop: '2rem',
		boxShadow: 'none',
		'&:hover': {
			backgroundColor: '#FF9800',
		},
		[theme.breakpoints.down('xs')]: {
			marginTop: '1rem',
			marginRight: '1rem'
		}
	},
	table1: {
		width: '20%',
	},
	table2: {
		width: '20%',
	},
	table3: {
		width: '40%',
	},
	table4: {
		width: '20%',
	},
	smClass: {
		[theme.breakpoints.down('xs')]: {
	    display: 'flex',
	    flexDirection: 'column',
	  	borderBottom: 'none',
	  }
  },
  xsClass: {
  	[theme.breakpoints.down('xs')]: {
  		display: 'flex',
  		borderBottom: 'none',
  		alignItems: 'center'
  	}
  },
	pillCont: {
		display: 'flex',
		position: 'relative'
	},
	pillClass: {
		width: '6.6%',
	},
	pillBottom: {
		position: 'absolute',
    width: '100%',
    display: 'flex',
	}
}));

const StyledTableRow = withStyles((theme) => ({
  root: {
  	[theme.breakpoints.up('sm')]: {
	    '&:nth-of-type(even)': {
	      backgroundColor: '#F3F8FC',
	    },
    },
  	[theme.breakpoints.down('xs')]: {
  		borderRadius: '8px',
  		marginBottom: '1rem',
  		border: '1px solid rgba(224, 224, 224, .25)',
  		margin: 'auto 1rem 1rem',
  		boxShadow: '0px 4px 3px -3px rgb(0 0 0 / 10%), 2px 3px 3px 2px rgb(0 0 0 / 4%), 2px 3px 3px 2px rgb(0 0 0 / 1%)'
    }
  }
}))(TableRow);

export default function Tables(props) {

  const theme = useTheme();
  const classes = useStyles(props);
  const matchSM = useMediaQuery(theme.breakpoints.up('sm'));
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [less, setLess] = useState(false)

	const filter = (d) => {
		d.sort(function(a, b) {
		  return a[props.type]['rank'] - b[props.type]['rank'];
		})
		return d
	};

  useEffect(() => {

		setData(dummy);

  }, [props.type])

  const handleLimit = () => {

  	if (!less) {
	  	setLimit(40);
	  	setLess(!less)
  	}

  	if (less) {
	  	setLimit(10);
	  	setLess(!less)
  	}

  }

	return (
		<div>
	    <TableContainer component={Paper} className={classes.paper}>
	      <Table aria-label="customized table">
		      {
		        matchSM &&
		        <TableHead>
		          <TableRow>
		            <TableCell className={classes.table1}><Typography variant="caption">rank</Typography></TableCell>
		            <TableCell className={classes.table2}><Typography variant="caption">country</Typography></TableCell>
		            <TableCell className={classes.table3}></TableCell>
		            <TableCell className={classes.table4} align="center"><Typography variant="caption">score %</Typography></TableCell>
		          </TableRow>
		        </TableHead>
		      }
	        <TableBody className={classes.smBody}>
	        {
	        	filter(data).slice(0, [limit]).map((d, i) => (
	            <StyledTableRow key={i}>
	              <TableCell className={classes.xsClass}>{!matchSM && <Typography style={{marginRight: 'auto'}} variant="caption">rank</Typography>}{d.[props.type]['rank']}</TableCell>
	              <TableCell className={classes.xsClass}>{!matchSM && <Typography style={{marginRight: 'auto'}} variant="caption">country</Typography>}{d.country}</TableCell>
	              <TableCell className={classes.smClass}>
	              	<div className={classes.pillCont}>
		              	{
		              		Array(15).fill(<LinearProgress variant="determinate" value='0' className={classes.pillClass} />)
		              	}
		              	<span className={classes.pillBottom}>
		              		{
		              			Array((Math.round(d.[props.type]['value']*120/6.6))).fill(
		              				<LinearProgress
		              					variant="determinate"
		              					className={`${classes.pillClass} ${d.[props.type]['value'] <= 0.35 ? 'low' : (d.[props.type]['value'] <= 0.6 ? 'mid' : 'high')}`}
		              					value={100}
	              					/>
		              			)
		              		}
		              	</span>
	              	</div>

              	</TableCell>
	              <TableCell className={classes.xsClass} align="center">{!matchSM && <Typography style={{marginRight: 'auto'}} variant="caption">score %</Typography>}{d.[props.type]['value']}</TableCell>
	            </StyledTableRow>          
        		))
	        }
	        </TableBody>
	      </Table>
	    </TableContainer>
	    <Button onClick={handleLimit} variant="contained" className={classes.btnClass}>{!less ? 'Show All' : 'Show Less'}</Button>
		</div>
	);
}
