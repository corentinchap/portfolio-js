import { app } from './axiosConfig';
import emailjs from 'emailjs-com';
import { 
    REQUEST_PROJECTS,
    RECEIVE_PROJECTS,
    MAIL_SENT,
    RECEIVE_TESTIMONIALS,
    REQUEST_TESTIMONIALS,
    REQUEST_SKILLSETS,
    RECEIVE_SKILLSETS
} from './types';


export const fetchProjects = () => {
  return function(dispatch){
    dispatch({type: REQUEST_PROJECTS});
    app
        .get('/api/projects')
        .then(res => dispatch({type: RECEIVE_PROJECTS, payload: res.data}))
        .catch(err => console.log(err));
  }
}

export const fetchSkillsets = () => {
    return function(dispatch){
        dispatch({type: REQUEST_SKILLSETS});
        app 
            .get('/api/skillsets')
            .then(res => dispatch({type: RECEIVE_SKILLSETS, payload: res.data}))
            .catch(err => console.log(err));
    }
}

export const fetchTestimonials = () => {
    return function(dispatch){
      dispatch({type: REQUEST_TESTIMONIALS});
      app
          .get('/api/testimonials')
          .then(res => {
              dispatch({type: RECEIVE_TESTIMONIALS, payload: res.data});
          })
          .catch(err => console.log(err));
    }
}

export const sendContactMail = (form) => {
    return function(dispatch){
        emailjs.sendForm('gmail','template_HMQ3hbU7',form).then((res) => {
            dispatch({type: MAIL_SENT, payload:res.text})
        });
    }
}

