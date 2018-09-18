import React from 'react';
import Button from '@material-ui/core/Button';

class App extends React.Component {
  constructor(props) {
    super(...arguments);
    this.render = this.render.bind(this);
  }
  render() {
    return (
        <div>
          <Button variant="contained" color="primary">
          Hello World
          </Button>
        </div>
    );
  }
};

export default App;
