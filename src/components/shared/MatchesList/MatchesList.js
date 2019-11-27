import React from "react";
import classnames from "classnames";
import { Row, Col, Card } from "antd";
import "./MatchesList.css";

export default function MatchesList({ matches, children }) {
  return (
    <Row>
      {matches.map((match, index) => {
        const cardClassnames = classnames("Matches-card", {
          "home-winner": match.isHomeWinner,
          "away-winner": match.isAwayWinner
        });

        const cardHeader = children ? (
          children(match)
        ) : (
          <span>
            {match.date}, {match.scheduled || match.time} - {match.location}
          </span>
        );

        return (
          <Col span={8} key={index}>
            <Card className={cardClassnames}>
              <div className="GeneralInformation">{cardHeader}</div>
              <div className="TeamInformation home-information">
                <span className="TeamName">{match.homeName}</span>
                <span className="Score">{match.homeScore}</span>
              </div>
              <div className="TeamInformation away-information">
                <span className="TeamName">{match.awayName}</span>
                <span className="Score">{match.awayScore}</span>
              </div>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
