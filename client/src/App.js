import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import QueryInput from "./QueryInput";
import Header from "./Header";
import Results from "./Results";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { server: null };
  }

  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Header />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <QueryInput />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <Results />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default App;
