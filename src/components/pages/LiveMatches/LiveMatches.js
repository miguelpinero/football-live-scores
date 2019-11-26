import React, { useState } from "react";
import MatchesList from "../../shared/MatchesList/MatchesList";
import Loader from "../../shared/Loader/Loader";
import useInterval from "../../../lib/useInterval";
import CustomCardHeader from "./CustomCardHeader";
import { fetchLiveMatches } from "../../../services/liveScoreSevice";
import { Layout } from "antd";
import "./LiveMatches.css";

const { Content } = Layout;

export default function LiveMatches() {
  const [matches, setMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useInterval(() => {
    setIsLoading(true);
    fetchLiveMatches().then(liveMatches => {
      setMatches(liveMatches);
      setIsLoading(false);
    });
  }, 25000);

  return (
    <Layout className="Container">
      <Layout className="Content-wrapper">
        <Content className="Matches">
          {isLoading ? (
            <Loader />
          ) : (
            <MatchesList matches={matches}>
              {match => <CustomCardHeader match={match} />}
            </MatchesList>
          )}
        </Content>
      </Layout>
    </Layout>
  );
}
