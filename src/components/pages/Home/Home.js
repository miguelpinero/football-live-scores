import React from "react";
import PastMatches from "../PastMatches";
import UpcomingMatches from "../UpcomingMatches";
import LiveMatches from "../LiveMatches";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./Home.css";

const { Item } = Menu;
const { Header } = Layout;

const menuOrder = {
  upcoming: "2",
  live: "3"
};

export default function Home() {
  let location = useLocation();
  const defaultMenu = menuOrder[location.pathname] || "1";

  return (
    <div className="App">
      <Layout className="NavigationBar">
        <Header className="NavigationBar-header">
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[defaultMenu]}
          >
            <Item key="1">
              <Link to="/">Past matches </Link>
            </Item>
            <Item key="2">
              <Link to="/upcoming">Upcoming matches </Link>
            </Item>
            <Item key="3">
              <Link to="/live">Live</Link>
            </Item>
          </Menu>
        </Header>
        <Switch>
          <Route exact path="/">
            <PastMatches />
          </Route>
          <Route path="/upcoming">
            <UpcomingMatches />
          </Route>
          <Route path="/live">
            <LiveMatches />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}
