import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <img 
          className="materialboxed" 
          alt='a group of trees in a park'
          width="100" 
          height='100'
          src={project.image.url} />
        <span className="card-title ">{project.title}</span>
        <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
        <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default ProjectSummary
