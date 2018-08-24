import React, { Component } from 'react';

class Person extends Component {
  render() {
    return (
      <form>
        <div className='form-group'>
          <label for='exampleInputEmail1' className='bmd-label-floating'>Email address</label>
          <input type='email' className='form-control' id='exampleInputEmail1' />
          <span className='bmd-help'>We'll never share your email with anyone else.</span>
        </div>
        <div className='form-group'>
          <label for='exampleInputPassword1' className='bmd-label-floating'>Password</label>
          <input type='password' className='form-control' id='exampleInputPassword1' />
        </div>
        <div className='form-group'>
          <label for='exampleSelect1' className='bmd-label-floating'>Example select</label>
          <select className='form-control' id='exampleSelect1'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className='form-group'>
          <label for='exampleSelect2' className='bmd-label-floating'>Example multiple select</label>
          <select multiple className='form-control' id='exampleSelect2'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className='form-group'>
          <label for='exampleTextarea' className='bmd-label-floating'>Example textarea</label>
          <textarea className='form-control' id='exampleTextarea' rows='3'></textarea>
        </div>
        <div className='form-group'>
          <label for='exampleInputFile' className='bmd-label-floating'>File input</label>
          <input type='file' className='form-control-file' id='exampleInputFile' />
          <small className='text-muted'>This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
        </div>
        <div className='radio'>
          <label>
            <input type='radio' name='optionsRadios' id='optionsRadios1' value='option1' checked />
            Option one is this and that&mdash;be sure to include why it's great
    </label>
        </div>
        <div className='radio'>
          <label>
            <input type='radio' name='optionsRadios' id='optionsRadios2' value='option2' />
            Option two can be something else and selecting it will deselect option one
    </label>
        </div>
        <div className='radio disabled'>
          <label>
            <input type='radio' name='optionsRadios' id='optionsRadios3' value='option3' disabled />
            Option three is disabled
    </label>
        </div>
        <div className='checkbox'>
          <label>
            <input type='checkbox' /> Check me out
    </label>
        </div>
        <button className='btn btn-default'>Cancel</button>
        <button type='submit' className='btn btn-primary btn-raised'>Submit</button>
      </form>
    );
  }
}


export default Person;