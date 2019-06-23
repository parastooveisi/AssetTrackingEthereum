import React, { Fragment, Component } from "react";
import { render } from "react-dom";
import Layout from "../../components/Layout";
import { Card, Button, Table } from "semantic-ui-react";

import tracker from "../../ethereum/tracker";
// import { Timeline, Event } from "react-timeline-scribble";
import AssetRow from "../../components/AssetRow";
// import Timeline from './Timeline';
//import './timeline.css';
import {Timeline, TimelineEvent} from 'react-event-timeline'

class History extends Component {
  static async getInitialProps(props) {
    const lengthOwners = await tracker.methods.lengthOwners(props.query.id).call();

    let owners = await Promise.all(
      Array(parseInt(lengthOwners))
        .fill()
        .map((element, index) => {
          return tracker.methods.owners(props.query.id,index).call();
        })
    );
    console.log(owners);

    // var timelinedata = [];
    // for (var i = 0; i < lengthOwners; i++) {
    //     timelinedata.push({
    //         text: owners[i],
    //         // sortable: true,
    //         // resizeable: true
    //     });
    // }
    // console.log(timelinedata);

  return {
    lengthOwners,
    owners
  };
}

renderowners() {
  const items = this.props.owners.map(address => {
    return {
      header: address,
      description: "",
      fluid: true
    };
  });

  return <Card.Group items={items} />;
}
  render(){
   return(
     <Layout>
     <h3> List of all producers! </h3>
     <div>
     {this.renderowners()}
     </div>
     </Layout>
  );
  }
}
export default History;
