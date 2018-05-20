import React from "react";
import { Grid, Form, TextArea, Button } from "semantic-ui-react";

export default function QueryInput() {
    return (
        <Form>
        <Grid>
          <Grid.Row>
            <Grid.Column width={14}>
              <TextArea autoHeight placeholder="Your Query" autocorrect="off" spellcheck="false" />
            </Grid.Column>
            <Grid.Column width={2}>
              <Button primary style={ { height: "100%" } }>Query</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    );
}