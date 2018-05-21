import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import QueryInput from "./QueryInput";
import Header from "./Header";
import Results from "./Results";
import { postData } from "./utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { };
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
              <QueryInput onQuery={this._onQuery.bind(this)} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <Results results={this.state.results} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }

  async _onQuery(query) {
    const results = await postData("/api/query", { query });
    this.setState({ results });
  }
}

export default App;
