import React, { Component } from 'react';
import axios from 'axios';
const API_URL = "http://localhost:5000";
 
export default class ProjectImageUploader extends Component {
    constructor(props){
        super(props);

        this.state = {  
            multerImages: []
        }
    }
    
    updateState(e){
      let imageFormObj = new FormData();

      imageFormObj.append("imageName", "multer-image-" + Date.now());
      imageFormObj.append("imageData", e.target.files[0]);
      imageFormObj.append("projectId", this.props.projectId);

      this.uploadImage(imageFormObj);

    }

    
    uploadImage(imageFormObj) {

        axios.post(API_URL + `/image/uploadmulter`, imageFormObj)
        .then((data) => {
            if (data.data.success) {
            
            this.props.handleImageChange(data.data.imgPath);
            }
        })
        .catch((err) => {
            alert("Error while uploading image using multer : WHY ? HERE IS : " + err);
        });
      }
   
    render() {
        return (
        <div className="image-container">
            <div className="process">
                <p className="process__details">Upload image</p>

                <input type="file" name="project-image" className="process__upload-btn" onChange={(e) => this.updateState(e)} />
            </div>
        </div>
        );
    }
}