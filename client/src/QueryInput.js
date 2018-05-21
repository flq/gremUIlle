import React from "react";
import { Grid, Form, TextArea, Button } from "semantic-ui-react";
import { withStateHandlers } from "recompose";

/**
 * @param { { queryInput: string, onQueryInputChange: (v: string) => any, onQuery: () => any } } props
 */
function QueryInput({ queryInput, onQueryInputChange, onQuery }) {
  return (
    <Form>
      <Grid>
        <Grid.Row>
          <Grid.Column width={14}>
            <TextArea
              autoHeight
              placeholder="Your Query"
              autoCorrect="off"
              spellCheck="false"
              value={queryInput}
              onChange={evt => onQueryInputChange(evt.target.value)}
            />
          </Grid.Column>
          <Grid.Column width={2}> 
            <Button primary style={{ height: "100%" }} onClick={ () => onQuery(queryInput) }>
              Query
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  );
}

export default withStateHandlers(
    { queryInput: "" },
    {
        onQueryInputChange: ({queryInput}) => (value) => ({ queryInput: value })
    })(QueryInput);
