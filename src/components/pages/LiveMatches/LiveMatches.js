import React, { useState } from "react";
import MatchesList from "../../shared/MatchesList/MatchesList";
import Loader from "../../shared/Loader/Loader";
import useInterval from "../../../lib/useInterval";
import { fetchLiveMatches } from "../../../services/liveScoreSevice";
import { Layout } from "antd";

const { Content } = Layout;

function CardHeader({ match }) {
  return (
    <div>
      <span className="status"> {match.status} </span>
      {match.status === "IN PLAY" && <span> min {match.time} </span>}
      <span> - {match.location} </span>
    </div>
  );
}

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
              {match => <CardHeader match={match} />}
            </MatchesList>
          )}
        </Content>
      </Layout>
    </Layout>
  );
}
