import React from "react";
import { Row, Col, Card } from "antd";

export default function MatchesList({ matches }) {
  return (
    <Row>
      {matches.map(match => (
        <Col span={8}>
          <Card className="Matches-card">
            <div className="GeneralInformation">
              <span>
                {match.date}, {match.scheduled} - {match.location}
              </span>
            </div>
            <div className="TeamInformation">
              <span className="TeamName">{match.homeName}</span>
              <span className="Score">{match.homeScore}</span>
            </div>
            <div className="TeamInformation">
              <span className="TeamName">{match.awayName}</span>
              <span className="Score">{match.awayScore}</span>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
