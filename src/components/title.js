import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { Fragment } from 'react';

const boxCount = 3
const gridItems = [...Array(boxCount)].map((d ,i) => {
  return (<Grid item bgcolor="primary.main" xs={4}>i</Grid>)
})

// Hidden 是根據視窗寬度隱藏元件的 component ，不是用 css 隱藏

const title = (props) => {
  return (
    <Fragment>
      <Hidden smUp>
        <Grid 
          container
          bgcolor="primary.main"
        >
          {
            gridItems
          }
        </Grid>
      </Hidden>
      <Box
        bgcolor="primary.main"
        color="primary.contrastText"
      >
        {props.name}
      </Box>
    </Fragment>
  )
};

export default title;
