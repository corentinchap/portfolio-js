import React, {Component} from 'react';
import ProjectImageUploader from './ProjectImageUploader';
import ProjectFieldEditor from './ProjectFieldEditor';
import axios from 'axios';

var mongoose = require('mongoose');
const API_URL = "http://localhost:5000";


class ProjectNewForm extends Component{
    
    constructor(props){
      super(props);

      this.state = {
        projectId: mongoose.Types.ObjectId(),
        images: [],
        body: '',
        name: '',
        tags: '',
        date: Date.now()      
      };

      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleTagsChange = this.handleTagsChange.bind(this);
      this.handleBodyChange = this.handleBodyChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleImageChange = this.handleImageChange.bind(this);
    }

    handleNameChange(e){
      this.setState({ name: e.target.value });
    }
    handleTagsChange(e){
      this.setState({tags: e.target.value});
    }
    handleSubmit(e){
      e.preventDefault();

      var project = {
        name : this.state.name,
        date : this.state.date,
        body : this.state.body,
        tags : this.state.tags
      }

      axios.post(API_URL + `/api/projects`, project)
      .then((data) => {
          if (data.data.success) {
          console.log('success : ' + data.data);
          }
      })
      .catch((err) => {
          alert("Error while uploading image using multer : WHY ? HERE IS : " + err);
      });
    }
    
    handleBodyChange(body){
       this.setState({
         body
       });
    }

    handleImageChange(Image){
      this.setState(prevState => ({
        images: [...prevState.images, Image]
      }));
   
    }


    render(){
      return (
        <form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data">
          <div>
            <label htmlFor="pjName">First Name</label>
            <input type="text" name="pjName"value={this.state.name} onChange={this.handleNameChange} />
          </div>
          <div>
            <label htmlFor="pjTags">Tags [,]</label>
            <input type="text" name="pjTags" value={this.state.tags} onChange={this.handleTagsChange} />
          </div>
          <div>
            <label htmlFor="pjImages">images</label>
              <ProjectImageUploader projectId={this.state.projectId} handleImageChange={this.handleImageChange} />
              {this.renderUploadedImages()}
          </div>
          <div>
            <label htmlFor="pjBody">Body</label>
              <ProjectFieldEditor handleBodyChange={this.handleBodyChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      )

    }
    
    renderUploadedImages(){
      
      if(this.state.images.length > 0){
        return (
        <div>
          {this.state.images.map((url, i) => (
              <img key={i} alt="preview" width="75px" src={url.replace('client\\public\\','')} /> 
          ))}
          </div>
        );
      }
    }
}
export default ProjectNewForm;