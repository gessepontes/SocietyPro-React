import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import compose from 'recompose/compose';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import { getList, showUpdate, init } from './PlayerActions'
import { USER_PIC_PATH } from './PlayerConst'

const styles = theme => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
});

class Players extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <ListItem key={bc.id} dense button>
                <Avatar src={USER_PIC_PATH + bc.foto} alt={bc.nome} />
                <ListItemText primary={bc.nome} secondary={bc.telefone} />
            </ListItem>
        ))        
    }

    render() {

        const { classes } = this.props;
                
        return (
            <div>
                <List>
                    {this.renderRows()}
                </List>

                <Link to="/player" >
                    <Button variant="fab" color="primary" aria-label="Add" className={classes.fab} mini>
                        <AddIcon />
                    </Button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.player.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, init }, dispatch)

export default compose(
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps, mapDispatchToProps),
)(Players);


