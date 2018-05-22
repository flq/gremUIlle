import React from "react";
import { Menu, Message } from "semantic-ui-react";

export default function Header({ error }) {
  return (
    <Menu attached="top">
      <Menu.Item>
        <h3>
          <em>gremUIlle</em>
        </h3>
      </Menu.Item>
      {error ? (
        <Menu.Item>
          <Message negative>{error}</Message>
        </Menu.Item>
      ) : null}
    </Menu>
  );
}
