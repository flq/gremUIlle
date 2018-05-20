import React from 'react';
import { Tab } from 'semantic-ui-react';
import ReactJson from 'react-json-view';

const panes = [
  { menuItem: 'JSON', render: JsonPane },
  { menuItem: 'Visual', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> }
]

function JsonPane() {
    return (
        <Tab.Pane>
            <ReactJson 
            name="results"
            displayDataTypes={false}
            src={{ firstname: "John", lastname: "Doe", children: [{ name: "Chica"}, { name: "Letta"}] }} />
        </Tab.Pane>
    )
}

export default function Results() {
    return (
        <Tab panes={panes} />
    );
}