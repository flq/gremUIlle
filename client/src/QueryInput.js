import React from "react";
import { Segment, Grid, Form, Button } from "semantic-ui-react";
import { HotKeys } from "react-hotkeys";
import { withStateHandlers, withHandlers, compose } from "recompose";

/**
 * @param { { queryInput: string, onQueryInputChange: (v: string) => any, onQuery: () => any } } props
 */
function QueryInput({ queryInput, onQueryInputChange, onQuery, addRef, onFocusRequested }) {
  return (
    <Segment basic>
      <Form>
        <HotKeys
          handlers={{
            runQuery: () => onQuery(queryInput)
          }}
        >
          <Grid>
            <Grid.Row>
              <Grid.Column width={14}>
                {/* 
                    using the standard textarea because the semantic ones does recalculations of height,
                    which causes a forced reflow and can cause trouble with a big json response 
                */}
                <textarea
                  ref={r => addRef("queryInput", r)}
                  rows={3}
                  autoFocus
                  autoHeight
                  placeholder="Your Query"
                  autoCorrect="off"
                  spellCheck="false"
                  value={queryInput}
                  onChange={evt => onQueryInputChange(evt.target.value)}
                />
              </Grid.Column>
              <Grid.Column width={2}>
                <Button primary style={{ width: "100%", height: "100%" }} onClick={() => onQuery(queryInput)}>
                  Query
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </HotKeys>
      </Form>
    </Segment>
  );
}

const handleTextInput = withStateHandlers(
  { queryInput: "" },
  {
    onQueryInputChange: ({ queryInput }) => value => ({ queryInput: value })
  }
);

/**
 * This HOC gives your component the ability to accept a {@type RefsStore} and
 * provides your component with an addRef(string, ref) function
 */
const refStoreSupport = withHandlers(() => {
  return {
    addRef: ({ refsStore }) => (name, ref) => {
      refsStore.addRef(name, ref);
    }
  };
});

export default compose(handleTextInput, refStoreSupport)(QueryInput);
