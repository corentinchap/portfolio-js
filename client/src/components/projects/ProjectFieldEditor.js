import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';



import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class projectFieldEditor extends Component {
  constructor(props) {
    super(props);

      this.state = {
        editorState: EditorState.createEmpty()
      };
    
  }
  // componentDidUpdate(){
  //   // Logic required to convert EditorState -> HTML and new HTML props -> EditorState
    
  //   const contentBlock = htmlToDraft(this.props.selectedProject.body);
    
  //   if (contentBlock) {
  //     const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
  //     const editorState = EditorState.createWithContent(contentState);
      
  //     const rawContentState = convertToRaw(this.state.editorState.getCurrentContent());

  //     // Check the HTML, comparing two states objects doesn't work
  //     if(this.props.selectedProject.body !== draftToHtml(rawContentState))
  //       this.setState({
  //         editorState,
  //       });
      
  //   }
      
    
  // }
   onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
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
      
      </div>
    )
    }
}
export default projectFieldEditor;
