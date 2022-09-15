import React from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends React.Component {
  render() {
    return (
      <div>
        <ChildComponent message="Data from first component" />
        //call childComponent
      </div>
    );
  }
}
export default ParentComponent;
