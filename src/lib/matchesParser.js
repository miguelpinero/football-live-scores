import moment from "moment";

export function upcomingMatchesParser({ data: { fixtures: matches } }) {
  return dataParser(matches).sort((a, b) => a.epoch - b.epoch);
}

export function matchesParser({ data: { match: matches } }) {
  return dataParser(matches).sort((a, b) => b.epoch - a.epoch);
}

function dataParser(matches) {
  return matches.map(match => {
    const {
      home_name: homeName,
      away_name: awayName,
      score,
      location,
      date,
      scheduled,
      status,
      time
    } = match;

    const [homeScore, awayScore] = score ? score.split(" - ") : ["-", "-"];
    const [isHomeWinner, isAwayWinner] = [
      homeScore > awayScore,
      awayScore > homeScore
    ];

    return {
      homeName,
      awayName,
      homeScore,
      awayScore,
      isHomeWinner,
      isAwayWinner,
      location,
      status,
      time,
      date: moment(date).format("MMM Do"),
      epoch: moment(date).unix(),
      scheduled
    };
  });
}
