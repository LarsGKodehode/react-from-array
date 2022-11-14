import './App.css';

// We have put our data inside a seperate file to
// keep things nice and tidy in here
import projects from "./data/projects";


// The following comment is what is called JSDoc, see: https://jsdoc.app/
/**
 * A callback function given to the .map() array method for generating
 * a new array of JSX.Elements/React components
 */
const createProjectList = (dataObject, index) => {
  // For consistencies sake, we are destructuring the data object here
  const { text, id } = dataObject;

  return (
    <Card key={index} title={text} />
  );
};

// Very simple component for displaying some text
const Card = (props) => {
  const { title } = props;

  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};


function App() {
  return (
    <div className="App">

      {
        /**
         * This single line of code creates a whole list of components.
         * And with proper naming you can immediately see what it represents
         */
      }
      {projects.map(createProjectList)}

    </div>
  );
}


export default App;