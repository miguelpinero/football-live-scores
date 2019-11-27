import React, { useState, useEffect } from "react";
import MatchesList from "../../shared/MatchesList/MatchesList";
import Loader from "../../shared/Loader/Loader";
import useInterval from "../../../lib/useInterval";
import CustomCardHeader from "./CustomCardHeader";
import EmptyView from "./EmptyView";
import { fetchLiveMatches } from "../../../services/liveScoreSevice";
import { Layout } from "antd";
import "./LiveMatches.css";

const { Content } = Layout;

export default function LiveMatches() {
  const [matches, setMatches] = useState([]);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    fetchLiveMatches().then(liveMatches => {
      setMatches(liveMatches);
      setIsFirstLoad(false);
    });
  }, []);

  useInterval(() => {
    fetchLiveMatches().then(liveMatches => {
      setMatches(liveMatches);
    });
  }, 50000);

  return (
    <Layout className="Container">
      <Layout className="Content-wrapper">
        <Content className="Matches">
          {isFirstLoad ? (
            <Loader />
          ) : matches.length > 0 ? (
            <MatchesList matches={matches}>
              {match => <CustomCardHeader match={match} />}
            </MatchesList>
          ) : (
            <EmptyView />
          )}
        </Content>
      </Layout>
    </Layout>
  );
}
