/*eslint-disable*/
import { Paper, Grid, Typography } from '@material-ui/core/';
import SVG from '../Components/SVG';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#19BED8' },
    secondary: { main: '#19BED8' },
  },
});

const style = {
  borderRadius: 10,
};

const headerSection = {
  borderBottom: 'solid 0.8px rgba(225, 225, 225, 0.8)',
  padding: '2%'
}

const linkStyle = {
  fontSize: '10px',
  marginLeft: '10%',
}

const headerItem = {
  minHeight: '5%',
  maxHeight: '6%',
}

const DownloadComponent = (props) => {
  return (
    <Paper
      style={style}
      elevation={2}
      rounded={'10px'}
    >
      <Grid container direction="column" style={{maxHeight: '25%', minHeight: '20%'}}>
        <Grid item>
          <Grid style={headerSection} container direction="row">
            <Grid item style={{headerItem}}>
                <Typography variant="body1">
                  <SVG type={"download"} /> Current Deployed Versions
                </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row">
            <Grid item xs={12} style={{paddingBottom: '4%'}}>
              <Typography component="p">
                <a style={linkStyle} href="#">Rules Download</a>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography component="p">
                <a style={linkStyle} href="#">Tests Download</a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>  
      </Grid>
    </Paper>
  );
};

export default DownloadComponent;
