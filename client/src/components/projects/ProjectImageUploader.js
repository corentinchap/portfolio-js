import React, { Component } from 'react';
import DefaultImage from '../../../src/assets/default-img.jpg';


 
export default class ProjectImageUploader extends Component {
    constructor(props){
        super(props);

        this.state = {
            multerImage: DefaultImage
        }
    }
    
    updateState(e){
      let imageFormObj = new FormData();

      imageFormObj.append("imageName", "multer-image-" + Date.now());
      imageFormObj.append("imageData", e.target.files[0]);

      // stores a readable instance of 
      // the image being uploaded using multer
      this.setState({
          multerImage: URL.createObjectURL(e.target.files[0])
      });

    }

    render() {
        return (
        <div className="image-container">
            <div className="process">
                <p className="process__details">Upload image</p>

                <input type="file" className="process__upload-btn" onChange={(e) => this.updateState(e, "multer")} />
                <img width="100px;" src={this.state.multerImage} alt="upload" className="process__image" />
            </div>
        </div>
        );
    }
}