import React, { Component } from "react";
import { Form, Button, Message, Input, Table } from "semantic-ui-react";
import tracker from "../../ethereum/tracker";
import Layout from "../../components/Layout";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";
import AssetRow from "../../components/AssetRow";

class TransferForm extends Component {
  static async getInitialProps(props) {
    const assetCount = await tracker.methods.assetsCount().call();

    let assets = await Promise.all(
      Array(parseInt(assetCount))
        .fill()
        .map((element, index) => {
          return tracker.methods.assets(index).call();
        })
    );
    return {
      assets,
      assetCount
    };
  }
  state = {
    id: "",
    value: "",
    errorMessage: "",
    loading: false
  };
  onSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });
    const { id, value } = this.state;

    try {
      const accounts = await web3.eth.getAccounts();
      await tracker.methods.transferProduct(id).send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether"),
        gas: "1000000"
      });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false, value: "" });
  };
  renderRows() {
    return this.props.assets.map((asset, index) => {
      return (
        <AssetRow
          key={index}
          id={index}
          asset={asset}
          //address={this.props.owner}
        />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Name</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Manufacturer</HeaderCell>
              <HeaderCell>Price</HeaderCell>
              <HeaderCell>Address of Owner</HeaderCell>
            </Row>
          </Header>
          <Body>{this.renderRows()}</Body>
        </Table>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>ID</label>
            <Input
              value={this.state.id}
              onChange={event => this.setState({ id: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Price to buy</label>
            <Input
              value={this.state.value}
              onChange={event =>
                this.setState({ value: event.target.value })
              }
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Buy!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default TransferForm;
