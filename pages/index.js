import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";
import Head from 'next/head'

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }
  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }
  render() {
    return (
      <Layout>
        <Head>
        <title>CrowdCoin</title>
        <link href="data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAMz/AGnd+gD8/v8ACgoKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEREREAAAAAEERERFAAAAEESIiIRQAAAQSREQiFAAABBIxEUIUAAAEEjERQhQAAAQSMRFCFAAABBIxEUIUAAAEEjERQhQAAAQSMRFCFAAABBIxEUIUAAAEEjERQhQAAAQRIzQhFAAAAEERERFAAAAABBERFAAAAAAARERAAAD4DwAA8AcAAOADAADgAwAA4AMAAOADAADgAwAA4AMAAOADAADgAwAA4AMAAOADAADgAwAA8AcAAPgPAAD8HwAA" rel="icon" type="image/x-icon" />
        </Head>
        <div>
          <h3>Open Campaigns</h3>
          <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
