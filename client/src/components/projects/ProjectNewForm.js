import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../../actions';
import ProjectImageUploader from './ProjectImageUploader';
import ProjectFieldEditor from './ProjectFieldEditor';
import axios from 'axios';
import mongoose from 'mongoose';

const API_URL = "http://localhost:5000";
var projectIsSelected = false;   // When page loads form is displayed without any informations

class ProjectNewForm extends Component{
    
    constructor(props){
      super(props);
      
      if(projectIsSelected)
      {
        var selectedProject = this.props.projects[this.props.selectedProject];

        this.state = {
          projectId: selectedProject._id,
          images: selectedProject.images,
          body: selectedProject.body,
          name: selectedProject.name,
          tags: selectedProject.tags,
          date: selectedProject.date      
        }
      }
      else{
        this.state = {
          projectId: mongoose.Types.ObjectId(),
          images: '',
          body: '',
          name: '',
          tags: '',
          date: Date.now()      
        };
      }
     
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleTagsChange = this.handleTagsChange.bind(this);
      this.handleBodyChange = this.handleBodyChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleImageChange = this.handleImageChange.bind(this);
    }

    componentDidMount(){
      this.props.fetchProjects();
    }

    componentDidUpdate(){
      const pjId = this.props.selectedProject;
      const selectedProject = this.props.projects[pjId];
      
      if(selectedProject !== undefined)
      {
        // No selected projects
        if(selectedProject._id !== this.state.projectId)
        {
          this.setState({
            projectId: selectedProject._id,
            images: selectedProject.images,
            body: selectedProject.body,
            name: selectedProject.name,
            tags: selectedProject.tags,
            date: selectedProject.date      
          },() => {
            this.handleBodyChange(selectedProject.body);
          });
            
        }
  
      }
              
    }

   

    handleNameChange(e){
      this.setState({ name: e.target.value });
    }

    handleTagsChange(e){
      this.setState({tags: e.target.value});
    }

    handleSubmit(e){
      e.preventDefault();

      var project;

      if(this.state.tags instanceof String){
        // New projects, tags are a simple string
        project = {
          projectId: this.state.projectId,
          name : this.state.name,
          date : this.state.date,
          body : this.state.body,
          tags : this.state.tags.split(',')
        }
      }
      else{
        
        project = {
          projectId: this.state.projectId,
          name : this.state.name,
          date : this.state.date,
          body : this.state.body,
          tags : this.state.tags
        }
      }
     

      axios.post(API_URL + `/api/projects`, project)
      .then((data) => {
          if (data.data.success) {
          console.log('success : ' + data.data);
          }
      })
      .catch((err) => {
          alert("Error while uploading image using multer :" + err);
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

    renderUploadedImages(){
   
      if(typeof this.state.images !== 'undefined' && this.state.images.length > 0){
        return (
        <div>
          {this.state.images.map((url, i) => (
              <img key={i} alt="preview" width="75px" src={url.replace('client\\public\\','')} /> 
          ))}
          </div>
        );
      }
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
              <ProjectFieldEditor body={this.state.body} handleBodyChange={this.handleBodyChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      )

    }
    
}
function mapStateToProps({projects}) {
  return { projects }
}


export default connect(mapStateToProps, {fetchProjects})(ProjectNewForm);
