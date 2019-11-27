import React from "react";
import PastMatches from "components/pages/PastMatches";
import UpcomingMatches from "components/pages/UpcomingMatches";
import LiveMatches from "components/pages/LiveMatches";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { Layout, Menu, Button } from "antd";
import "./Home.css";

const { Item } = Menu;
const { Header } = Layout;

const menuOrder = {
  "/upcoming": "2",
  "/live": "3"
};

export default function Home() {
  let location = useLocation();
  const selectedKey = menuOrder[location.pathname] || "1";

  function showNotification() {
    Notification.requestPermission(function(result) {
      if (result === "granted") {
        navigator.serviceWorker.ready.then(function(registration) {
          registration.showNotification("Mi custom push notification", {
            body: "This is my first Push Notification "
          });
        });
      }
    });
  }

  return (
    <div className="App">
      <Layout className="NavigationBar">
        <Header className="NavigationBar-header">
          <Menu theme="dark" mode="horizontal" selectedKeys={[selectedKey]}>
            <Item key="1">
              <Link to="/">Past matches </Link>
            </Item>
            <Item key="2">
              <Link to="/upcoming">Upcoming matches </Link>
            </Item>
            <Item key="3">
              <Link to="/live">Live Matches</Link>
            </Item>
          </Menu>
        </Header>
        <Button type="primary" key="console" onClick={showNotification}>
          Show Push Notification
        </Button>
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
