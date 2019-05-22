import React, {Component} from 'react';
import ProjectImageUploader from './ProjectImageUploader';
import {connect} from 'react-redux';
import axios from 'axios';
import mongoose from 'mongoose';
import { EditorState , ContentState, convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import { adminUpdatePreview } from '../../actions/index'

import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const API_URL = "http://localhost:5000";

class ProjectNewForm extends Component{
    
    constructor(props){
      super(props);

      this.state = {
        projectId: mongoose.Types.ObjectId(),
        images: '',
        body: '',
        name: '',
        tags: '',
        date: Date.now(),
        editorState: EditorState.createEmpty()      
      };
     
      this.handleChange = this.handleChange.bind(this);
      this.handleImageChange = this.handleImageChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    onEditorStateChange = (editorState) => {
      
      this.setState({
        editorState
      });
      
      this.dispatchLastestProject();
      
    }

    dispatchLastestProject(){
      // Dispatch up to date project
      this.props.adminUpdatePreview({
        body: this.getEditorStateToHtml(),
        name: this.state.name,
        tags: this.state.tags
      })
    }
    
    getEditorStateToHtml(){
      
      var raw = convertToRaw(this.state.editorState.getCurrentContent());

      return draftToHtml(raw);
    }

    handleChange(event) {
      this.setState( {...this.state, [event.target.name]: event.target.value});
      
      this.dispatchLastestProject()
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

    injectBodyToEditorState(html){
        const blocksFromHtml = htmlToDraft(html);
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);

        return EditorState.createWithContent(contentState)
    }
    render(){
      // Handle render when new projects => empty selectedProject props
      // Handle update => selectedProject is set
      let projectToRender = {};
      let editorState;

      if(this.props.selectedProject === undefined){
        projectToRender = this.state;
        editorState = this.state.editorState;
      }
      else{
        projectToRender = this.props.selectedProject;
        editorState = this.injectBodyToEditorState(this.props.selectedProject.body);      
      }
      
     
      
      return (
        <form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data">
          <div>
            <label htmlFor="name">First Name</label>
            <input type="text" name="name"value={projectToRender.name} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="tags">Tags [,]</label>
            <input type="text" name="tags" value={projectToRender.tags} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="images">images</label>
              <ProjectImageUploader projectId={projectToRender.projectId} handleImageChange={this.handleImageChange} />
              {this.renderUploadedImages()}
          </div>
          <div>
            <label htmlFor="body">Body</label>
              <Editor
                editorState={editorState}
                wrapperClassName="wrapper"
                editorClassName="editor"
                onEditorStateChange={this.onEditorStateChange}
              />   
          </div>
          <button type="submit">Submit</button>
        </form>

      )

    }
    
}


export default connect(null, {adminUpdatePreview})(ProjectNewForm);

