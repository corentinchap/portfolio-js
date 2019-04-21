import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class projectFieldEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      editorHtml: ''
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      editorHtml : draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
    
  };

  render() {
    const { editorState } = this.state;
    return (
        <div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        <textarea
          hidden
          onChange={this.props.retrieveBody(draftToHtml(convertToRaw(editorState.getCurrentContent())))}
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> 
      </div>
    )
  }
}
export default projectFieldEditor;
