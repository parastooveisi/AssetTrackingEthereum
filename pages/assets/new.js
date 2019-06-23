import React, { Component } from "react";

import { Form, Button, Message, Input } from "semantic-ui-react";
import tracker from "../../ethereum/tracker";
import Layout from "../../components/Layout";
import { Link } from "../../routes";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";

class AssetNew extends Component {
  state = {
    name: "",
    description: "",
    manufacturer: "",
    price: "",
    loading: false,
    errorMessage: ""
  };

  onSubmit = async event => {
    event.preventDefault();

    const { name, description, manufacturer, price} = this.state;
    this.setState({ loading: true, errorMessage: "" });

    try {
      const accounts = await web3.eth.getAccounts();
      console.log("asdcasd", accounts[0]);
      console.log(error);
      await tracker.methods
        .createAsset(name, description, manufacturer, price)
        .send({
          from: accounts[0],
          value: web3.utils.toWei(this.state.price, "ether"),
          gas: "1000000"
        });

        var d = new Date().toLocaleTimeString(); // for now
        console.log(d);

      //   var event = tracker.AssetCreate().watch(function(error, result) {
      //     console.log(result);
      // });

      Router.pushRoute("/");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3> Create an Asset </h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Name</label>
            <Input
              value={this.state.name}
              onChange={event => this.setState({ name: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Description</label>
            <Input
              value={this.state.description}
              onChange={event =>
                this.setState({ description: event.target.value })
              }
            />
          </Form.Field>

          <Form.Field>
            <label>Manufacturer</label>
            <Input
              value={this.state.manufacturer}
              onChange={event =>
                this.setState({ manufacturer: event.target.value })
              }
            />
          </Form.Field>

          <Form.Field>
            <label>Price</label>
            <Input
              value={this.state.price}
              onChange={event => this.setState({ price: event.target.value })}
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>
            Create
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default AssetNew;


// <Form.Field>
//   <label>ID</label>
//   <Input
//     value={this.state.id}
//     onChange={event => this.setState({ id: event.target.value })}
//   />
// </Form.Field>
