import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import { HotKeys } from "react-hotkeys";
import QueryInput from "./QueryInput";
import Header from "./Header";
import Results from "./Results";
import { postData } from "./utils";
import RefsStore from "./RefsStore";

const keyMap = {
  focusQueryInput: "alt+q",
  runQuery: "alt+enter"
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.refsStore = new RefsStore();
  }

  render() {
    return (
      <HotKeys
        keyMap={keyMap}
        handlers={{
          focusQueryInput: () => this.refsStore.getRef("queryInput").focus()
        }}
      >
        <Container fluid>
          <Grid>
            <Grid.Row>
              <Header error={this.state.error} />
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <QueryInput refsStore={this.refsStore} onQuery={this._onQuery.bind(this)} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <Results results={this.state.results} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </HotKeys>
    );
  }

  async _onQuery(query) {
    try {
      const results = await postData("/api/query", { query });
      this.setState({ results, error: null });
    } catch (e) {
      this.setState({ error: e.message });
    }
  }
}

export default App;
