import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import tracker from "../ethereum/tracker";
import { Link } from "../routes";


class AssetRow extends Component {
  render() {
    const { Row, Cell } = Table;
    return (
      <Row>
        <Cell>{this.props.asset.id}</Cell>
        <Cell>{this.props.asset.name}</Cell>
        <Cell>{this.props.asset.description}</Cell>
        <Cell>{this.props.asset.manufacturer}</Cell>
        <Cell>{this.props.asset.price}</Cell>
        <Cell>{this.props.asset.owner}</Cell>
        <Cell>
        <Link route="/assets/history">
          <a>
            <Button
              content="History"
            />
          </a>
        </Link>

        </Cell>
      </Row>
    );
  }
}

export default AssetRow;
