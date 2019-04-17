import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';

class ProjectNewForm extends Component{
  // https://www.udemy.com/node-with-react-fullstack-web-development/learn/v4/t/lecture/7607660?start=0
    render(){
        return(
            <div>
              <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                <Field type="text" name="yurmom" component="input" />
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