import React, { useEffect } from "react";
import { fetchPastMatches } from "../../../services/liveScoreSevice";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import "./Home.css";

const { Item } = Menu;
const { Header, Content } = Layout;

function Home() {
  useEffect(() => {
    fetchPastMatches().then(data => {
      console.log(data);
    });
  }, []);

  return (
    <div className="App">
      <Layout className="NavigationBar">
        <Header className="NavigationBar-header">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Item key="1">Past games</Item>
            <Item key="2" disabled={true}>
              Live
            </Item>
          </Menu>
        </Header>
        <Layout className="Container">
          <Layout className="Content-wrapper">
            <Content className="Matches">Content</Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Home;
