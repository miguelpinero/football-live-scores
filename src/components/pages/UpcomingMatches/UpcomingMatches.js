import React, { useEffect, useState } from "react";
import MatchesList from "components/shared/MatchesList/MatchesList";
import Loader from "components/shared/Loader/Loader";
import { fetchUpcomingMatches } from "services/liveScoreSevice";
import { Layout } from "antd";

const { Content } = Layout;

export default function PastMatches() {
  const [matches, setMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUpcomingMatches().then(matchesInformation => {
      setMatches(matchesInformation);
      setIsLoading(false);
    });
  }, []);

  return (
    <Layout className="Container">
      <Layout className="Content-wrapper">
        <Content className="Matches">
          {isLoading ? <Loader /> : <MatchesList matches={matches} />}
        </Content>
      </Layout>
    </Layout>
  );
}
