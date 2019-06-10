import React from "react";
import { Container, Menu } from "semantic-ui-react";
import Head from "next/head";
import { Link } from "../routes";

export default props => {
  return (
    <Container>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"
        />
      </Head>
      <Menu style={{ marginTop: "10px" }}>
        <Menu.Menu position="right">
          <Link route="/">
            <a className="item">Main Page</a>
          </Link>
          <Link route="/assets/new">
            <a className="item">New Asset</a>
          </Link>
          <Link route="/assets/transfer">
            <a className="item">Transfer Asset</a>
          </Link>
        </Menu.Menu>
      </Menu>
      {props.children}
    </Container>
  );
};
