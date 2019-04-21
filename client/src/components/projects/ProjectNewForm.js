import React, {Component} from 'react';
import ProjectImageUploader from './ProjectImageUploader';
import DefaultImage from '../../../src/assets/default-img.jpg';
import ProjectFieldEditor from './ProjectFieldEditor';

//import moment from 'moment';
import axios from 'axios';


class ProjectNewForm extends Component{
// https://github.com/jpuri/react-draft-wysiwyg

    constructor(props){
      super(props);
      this.state = {
        multerImage: DefaultImage,
        body: '',
        name: '',
        tags: '',
        date: Date.now()      
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
      var target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      })
    }

    handleSubmit(event){
      alert('okay bro : ' + this.state.value);

      event.preventDefault();
    }

    retrieveBody(body){
      this.setState({
        body
      })
    }

    uploadImage(e) {
      let imageFormObj = new FormData();

      imageFormObj.append("imageName", "multer-image-" + Date.now());
      imageFormObj.append("imageData", e.target.files[0]);

      // stores a readable instance of 
      // the image being uploaded using multer
      this.setState({
          multerImage: URL.createObjectURL(e.target.files[0])
      });

      axios.post(`http://localhost:5000/image/uploadmulter`, imageFormObj)
      .then((data) => {
          if (data.data.success) {
          alert("Image has been successfully uploaded");
          }
      })
      .catch((err) => {
          alert("Error while uploading image using multer" + err);
      });
    }

    render(){
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="pjName">First Name</label>
            <input type="text" name="pjName" placeholder={this.state.name} value={this.state.name} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="pjTags">Tags [,]</label>
            <input type="text" name="pjTags" placeholder={this.state.tags} value={this.state.tags} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="pjDate">Date</label>
            <input type="text" name="pjTags" placeholder={this.state.tags} value={this.state.tags} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="pjImages">images</label>
              <ProjectImageUploader uploadImage={this.uploadImage} />
          </div>
          <div>
            <label htmlFor="pjBody">Body</label>
              <ProjectFieldEditor retrieveBody={this.retrieveBody} />
          </div>
          <button type="submit">Submit</button>
        </form>
      )

    }
}
export default ProjectNewForm;