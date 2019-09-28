/* eslint-disable no-script-url */

import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

function Phases(props){ 
  
    const classes = useStyles(); 
    return (
    <React.Fragment>
      
      <Typography component="p" variant="h4">
        {props.name}
      </Typography>
      
      <div>
        <Link color="primary" href="javascript:;">
          View tasks
        </Link>
      </div>
    </React.Fragment>
    );
  }

export default Phases; 

