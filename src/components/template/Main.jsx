import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Person from '@material-ui/icons/Person';
import Flag from '@material-ui/icons/Flag';
import People from '@material-ui/icons/People';
import Menu from '@material-ui/icons/Menu';
import HomeIcon  from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'fixed',
    bottom: '0',
  },
});

class ScrollableTabsButtonForce extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Fdid-Projetos
          </Typography>
          </Toolbar>
        </AppBar>

        {value === 0 && <TabContainer>Item One</TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}
        {value === 4 && <TabContainer>Item Five</TabContainer>}

        <div className={classes.root}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            fullWidth
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Home" icon={<HomeIcon />} />
            <Tab label="Pessoa" icon={<Person />} />
            <Tab label="Time" icon={<Flag />} />
            <Tab label="Jogador" icon={<People />} />
            <Tab label="Outros" icon={<Menu />} />
          </Tabs>
        </div>
      </div>
    );
  }
}

ScrollableTabsButtonForce.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonForce);