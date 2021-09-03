import React, { useState } from 'react';

// Material UI
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme: Theme) => createStyles({
	...theme.spreadThis,
	aClass: {
		textAlign: 'center',
		textDecoration: 'none',
		display: 'flex',
		justifyContent: 'flex-end',
		flexDirection: 'column',
		minWidth: '76px',
	},
	dialogBody: {
		maxHeight: '400px'
	}
}))

function Text() {

  return (
  	<div style={{marginBottom: '1rem'}}>
  		<Typography style={{color:'#337ab7'}} variant="h6">Lorem Ipsum Title</Typography>
  		<Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
    </div>
  );
}

export default function Info(props) {

  const theme = useTheme();
  const classes = useStyles(props);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

	return (
		<div>
			<a onClick={handleClickOpen} className={classes.aClass} href="#">
				<InfoIcon style={{color: '#337ab7', fontSize: '1.75rem', margin: '0 1.5rem'}} />
				<Typography variant="caption" className={classes.pClass}>Glossary</Typography>
			</a>
      <Dialog
        fullWidth="md"
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Glossary of Terms</DialogTitle>
        <DialogContent className={classes.dialogBody}>
          <DialogContentText>
            {Array(15).fill(<Text />)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
		</div>
	);
}
