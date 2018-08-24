import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MaskedInput from 'react-text-mask';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={['(', /[1-9]/, /\d/,')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

class Player extends Component {

  state = {
    age: '',
    name: 'hai',
    textmask: '(  )     -    ',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChangeMask = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {

    const { classes } = this.props;
    const { textmask } = this.state;

    return (
      <form className={classes.root} autoComplete="off">
        <Grid container spacing={24}>
          <Grid item xs={12} sm={4}>
            <TextField
              id="nome"
              label="Nome"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="rg"
              label="Rg"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              id="datanascimento"
              type='date'
              label="Data de nascimento"
              margin="normal"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="formatted-text-mask-input">Telefone</InputLabel>
              <Input
                value={textmask}
                onChange={this.handleChangeMask('textmask')}
                id="formatted-text-mask-input"
                inputComponent={TextMaskCustom}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Posição</InputLabel>
              <Select
                value={this.state.age}
                onChange={this.handleChange}
                inputProps={{
                  name: 'age',
                  id: 'age-simple',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              id="foto"
              type='file'
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Link to="/players" >
              <Button variant="contained">
                Cancelar
              </Button>
            </Link>

            <Button variant="contained" color="primary">
              Salvar
          </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}


export default withStyles(styles)(Player);