import moment from "moment";
export function matchesParser({ data: { match: matches } }) {
  return matches.map(match => {
    const {
      home_name: homeName,
      away_name: awayName,
      score,
      location,
      date,
      scheduled
    } = match;
    const [homeScore, awayScore] = score.split(" - ");
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
      date: moment(date).format("MMM Do"),
      scheduled
    };
  });
}
