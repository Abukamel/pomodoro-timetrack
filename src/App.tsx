import Button from "@material-ui/core/Button";
import * as React from "react";
import "./App.css";

class App extends React.Component {
  public render() {
    return (
      <div className="container">
        <ul className="issue-list" />
        <Button variant="contained" color="primary">
          JIRA Sign In
        </Button>
      </div>
    );
  }
}

export default App;
