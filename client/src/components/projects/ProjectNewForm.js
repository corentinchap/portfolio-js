import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';

import ProjectField from './projectField';

class ProjectNewForm extends Component{
// https://github.com/jpuri/react-draft-wysiwyg
    renderFields(){
      return (
        <div>
          <Field label="Nom du projet" type="text" name="title" component={ProjectField} />
          <Field label="Tags" type="text" name="tags" component={ProjectField} />
          <Field label="Body" type="textarea" name="body" component={ProjectField} />
          <Field label="date" type="date" name="date" value={Date.now()} component={ProjectField} />
        </div>
      )
    }

    render(){
        return(
            <div>
              <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
               {this.renderFields()}
                <button type="submit">Submit</button>
              </form>
                ProjectNew fromdfgdfg
            </div>
        )
    }
}
export default reduxForm({
  form: 'projectForm'
})(ProjectNewForm);