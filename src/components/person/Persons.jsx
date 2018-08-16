import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate } from './PersonActions'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';


import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Delete, Edit } from '@material-ui/icons'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { USER_PIC_PATH } from './PersonConst'
import Person from './Person'

const ITEM_HEIGHT = 48;

class Persons extends Component {

    componentWillMount() {
        this.props.getList()
    }

    state = {
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    renderRows() {
        const list = this.props.list || []
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);


        return list.map(bc => (
            <ListItem key={bc.id} dense button onClick={this.handleClick}>
                <Avatar src={USER_PIC_PATH + bc.foto} alt={bc.nome} />
                <ListItemText primary={bc.nome} secondary={bc.telefone} />

                <ListItemSecondaryAction>
                    <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={this.handleClose}
                        PaperProps={{
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: 200,
                            },
                        }}
                    >

                        <MenuItem>
                            <ListItemIcon>
                                <Edit />
                            </ListItemIcon>
                            <ListItemText inset primary="Editar" />
                        </MenuItem>

                        <MenuItem>
                            <ListItemIcon>
                                <Delete />
                            </ListItemIcon>
                            <ListItemText inset primary="Excluir" />
                        </MenuItem>
                    </Menu>
                </ListItemSecondaryAction>
            </ListItem>
        ))
    }

    render() {
        return (
            <div>
                <List>
                    {this.renderRows()}
                    <Person />
                </List>
            </div>
        );
    }
}

const mapStateToProps = state => ({ list: state.person.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Persons)