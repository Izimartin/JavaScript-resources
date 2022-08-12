import React, { Component} from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import {deleteProject} from '../../store/actions/projectActions'
import moment from 'moment'

class ProjectDetails extends Component {
  render () {
    const { project, auth, id} = this.props;


  const onDelete = async () => {
    this.props.deleteProject(project, id)
    await this.props.history.push('/');
  }

  if (!auth.uid) return <Redirect to='/signin' /> 

  const button  = auth.uid === project.authorId ? 
    (<button className="btn-flat"
      onClick={onDelete}>Delete post</button> ) : null

  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
              <img 
                className="materialboxed" 
                alt='trees in a park'
                width="350" 
                src={project.image.url} />
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
            <div>{moment(project.createdAt.toDate()).calendar()}</div>
            {button}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }
}
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    id,
    project: project,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteProject: (project, id) => dispatch(deleteProject(project, id))
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(ProjectDetails)
