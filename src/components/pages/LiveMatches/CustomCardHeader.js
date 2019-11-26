import React from "react";
import classnames from "classnames";

export default function CustomCardHeader({ match }) {
  const isMatchLive = match.status === "IN PLAY";

  const cardHeaderClassnames = classnames("CardHeader", {
    live: isMatchLive
  });
  return (
    <div className={cardHeaderClassnames}>
      <span className="status">{isMatchLive ? "LIVE" : match.status}</span>
      {isMatchLive && <span> min {match.time} </span>}
      <span> - {match.location} </span>
    </div>
  );
}
