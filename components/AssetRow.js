import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import tracker from "../ethereum/tracker";
import { Link } from "../routes";


class AssetRow extends Component {
  state = {
    loading: false
  };
  confirm = async() => {
    this.setState({ loading: true});
    const accounts = await web3.eth.getAccounts();
    tracker.methods.confirmReceived(this.props.asset.id).send({
      from: accounts[0],
      gas: "1000000"
    });
    this.setState({ loading: false});
  };
  history = async() => {
    const id = this.props.asset.id;
  };
  render() {
    const { Row, Cell } = Table;
    return (
      this.props.asset.id,
      <Row>

        <Cell>{this.props.asset.id}</Cell>
        <Cell>{this.props.asset.name}</Cell>
        <Cell>{this.props.asset.description}</Cell>
        <Cell>{this.props.asset.manufacture}</Cell>
        <Cell>{this.props.asset.price}</Cell>
        <Cell>{this.props.asset.owner}</Cell>
        <Cell>
        <Link route={`/assets/history/${this.props.asset.id}`}>
          <a>
            <Button basic value = {this.props.asset.id}
              content="History"
            />
          </a>
        </Link>

        </Cell>
        <Cell>

            <Button color = "green"  basic onClick = {this.confirm} loading={this.state.loading}>
                Confirm
            </Button>

        </Cell>
      </Row>
    );
  }
}

export default AssetRow;
