import React from 'react';
import { Tab } from 'semantic-ui-react';
import ReactJson from 'react-json-view';

const panes = [
  { menuItem: 'JSON', render: JsonPane },
  { menuItem: 'Visual', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> }
]

function JsonPane({results}) {
    return (
        <Tab.Pane>
            <ReactJson 
            name="results"
            displayDataTypes={false}
            src={results} />
        </Tab.Pane>
    )
}

export default function Results(props) {
    return (
        <Tab panes={panes} {...props} />
    );
}