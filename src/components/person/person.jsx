import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './personActions'

import WorkIcon from '@material-ui/icons/Work';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import './person.css'
import MenuButton from '../../common/template/menuButton';

class Person extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <ListItem key={bc.id} dense button>
                <Avatar>
                    <WorkIcon />
                </Avatar>
                <ListItemText primary={bc.nome} secondary={bc.telefone} />

                <ListItemSecondaryAction>
                    <MenuButton />              
                </ListItemSecondaryAction>
            </ListItem>
        ))
    }

    render() {
        return (
            <div className='root'>
                <List>
                    {this.renderRows()}
                </List>
            </div>
        );
    }
}

const mapStateToProps = state => ({ list: state.person.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Person)