import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';

import {
  EmailShareButton, EmailIcon,
  FacebookShareButton, FacebookIcon,
  LinkedinShareButton, LinkedinIcon,
  TwitterShareButton, TwitterIcon,
  WhatsappShareButton, WhatsappIcon
} from "react-share";

const useStyles = makeStyles((theme: Theme) => createStyles({
	...theme.spreadThis,
	popOver: {
		padding: '1rem',
		width: '250px',
		display: 'flex',
		flexDirection: 'column',
		left: '20px'
	},
	inputClass: {
		fontSize: '.85rem',
		padding: '.25rem'
	}
}));

export default function Share(props) {

  const theme = useTheme();
  const classes = useStyles(props);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const shareUrl = "https://demo-csea-africa.netlify.app";

	return (
		<div>
			<Typography onClick={handleClick} style={{width: 'fit-content',margin: '.75rem 0'}} variant="subtitle1">
				<a className={classes.linkCLass}>Share</a>
			</Typography>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div className={classes.popOver}>
        	<Typography variant="overline">Copy Link</Typography>
        	<input value="https://demo-csea-africa.netlify.app" className={classes.inputClass} type="text" />

        	<div style={{marginTop: '1rem', display: 'flex', justifyContent: 'space-around' }}>

        		<TwitterShareButton hashtags={['africa', 'dpi', 'csea_afric', 'csea']} related={['csea_afric']} url={shareUrl} title="CSEA Digital Preparedness Index">
        			<TwitterIcon size={36} round={true} />
        		</TwitterShareButton>

        		<FacebookShareButton hashtag="#cseaafrica" quote="CSEA Africa Digital Preparedness Index" url={shareUrl}>
        			<FacebookIcon size={36} round={true} />
        		</FacebookShareButton>

        		<EmailShareButton subject="CSEA Africa Digital Preparedness Index" url={shareUrl}>
        			<EmailIcon size={36} round={true} />
        		</EmailShareButton>

        		<LinkedinShareButton title="CSEA Africa Digital Preparedness Index" source={shareUrl} url={shareUrl}>
        			<LinkedinIcon size={36} round={true} />
        		</LinkedinShareButton>

        		<WhatsappShareButton title="CSEA Africa Digital Preparedness Index" url={shareUrl}>
        			<WhatsappIcon size={36} round={true} />
        		</WhatsappShareButton>

        	</div>
        </div>
      </Popover>
		</div>
	);
}
