import React, {Component} from 'react';
import ProjectImageUploader from './ProjectImageUploader';
import ProjectFieldEditor from './ProjectFieldEditor';

var mongoose = require('mongoose');

class ProjectNewForm extends Component{
// https://github.com/jpuri/react-draft-wysiwyg

    constructor(props){
      super(props);

      this.state = {
        projectId: mongoose.Schema.Types.ObjectId,
        multerImages: [],
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
    handleSubmit(event){
      event.preventDefault();
    }

    handleBodyChange(body){
       this.setState({
         body
       });
    }

    handleImageChange(multerImage){
      this.setState(prevState => ({
        multerImages: [...prevState.multerImages, multerImage]
      }))
   
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
      
      if(this.state.multerImages.length > 0){
        return (
        <div>
          {this.state.multerImages.map((image, i) => (
              <img key={i} alt="preview" width="75px" src={image.get('imageData')} /> 
          ))}
          </div>
        );
      }
    }
}
export default ProjectNewForm;