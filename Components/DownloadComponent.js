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
  minHeight: '5%'
}

const linkStyle = {
  fontSize: '10px',
  marginLeft: '10%',
}

const DownloadComponent = (props) => {
  return (
    <Paper
      style={style}
      elevation={2}
      rounded={'10px'}
    >
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Grid style={headerSection} justify="center" alignItems="center" container>
            <Grid item xs={2} style={{flexBasis: '25%'}}>
              <div className="headerSVG" >
                <Typography>
                  <SVG type={"download"} />
                </Typography>
              </div>
            </Grid>
            <Grid item xs={8} style={{flexBasis: '75%', marginLeft: '-8%'}}>
              <div className="headerTitle">
                <Typography>
                  Current Deployed Versions
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
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
    </Paper>
  );
};

export default DownloadComponent;
