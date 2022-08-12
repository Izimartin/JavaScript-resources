const initState = {
  projects: [
    {id: 1, title: 'learing how todrive on the us', content: 'blah blah blah'},
    {id: 2, title: 'Why coding is fun', content: 'blah blah blah'},
    {id: 3, title: 'How to run in the park', content: 'blah blah blah'}
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT_SUCCESS':
      console.log('create project success' , action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    case 'DELETE_PROJECT_SUCCESS':
      console.log('delete project success' , action.project);
      return state;
    case 'DELETE_PROJECT_ERROR':
      console.log('delete project error' , action.project);
      return state;
    default: 
      return state
  }
}

export default projectReducer;