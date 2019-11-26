import React, { useEffect, useState } from "react";
import MatchesList from "./MatchesList/MatchesList";
import Loader from "../../shared/Loader/Loader";
import { fetchPastMatches } from "../../../services/liveScoreSevice";
import { Layout, Menu } from "antd";
import "./Home.css";

const { Item } = Menu;
const { Header, Content } = Layout;

function Home() {
  const [matches, setMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPastMatches().then(matchesInformation => {
      setMatches(matchesInformation);
      setIsLoading(false);
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
            <Content className="Matches">
              {isLoading ? <Loader /> : <MatchesList matches={matches} />}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default Home;
