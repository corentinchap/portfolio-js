import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import moment from 'moment';

import projectFieldEditor from './projectFieldEditor';

class ProjectNewForm extends Component{
// https://github.com/jpuri/react-draft-wysiwyg
  
    renderFields(){
      let now = moment().format('YYYY-MM-DD');
      return (
        <div>
          <div>
            <label htmlFor="pjName">First Name</label>
            <Field name="pjName" type="text" component="input" />
          </div>
          <div>
            <label htmlFor="pjTags">Tags [,]</label>
            <Field name="pjTags" type="text"component="input" />
          </div>
          <div>
            <label htmlFor="pjBody">Body</label>
            <Field name="pjBody" type="textarea" component={projectFieldEditor} />
          </div>
          <div>
            <Field hidden type="text" id="test" props={{value: now}} name="date" component="input" />
          </div>
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
            </div>
        )
    }
}
export default reduxForm({
  form: 'projectForm'
})(ProjectNewForm);