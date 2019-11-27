import { buildURL } from "../lib/buildURL";
import { upcomingMatchesParser, matchesParser } from "../lib/matchesParser";

const FROM = "2019-11-01";
const TO = "2019-11-27";
const COMPETITION_ID = "244";
const PAST_MATCHES_URL = "/api-client/scores/history.json";
const UPCOMING_MATCHES_URL = "/api-client/fixtures/matches.json";
const LIVE_MATCHES_URL = "/api-client/scores/live.json";

export function fetchPastMatches(from = FROM, to = TO) {
  const url = buildURL(PAST_MATCHES_URL, {
    from,
    to,
    competition_id: COMPETITION_ID
  });

  return fetch(url)
    .then(response => response.json())
    .then(data => matchesParser(data));
}

export function fetchLiveMatches() {
  const url = buildURL(LIVE_MATCHES_URL, {
    competition_id: COMPETITION_ID
  });

  return fetch(url)
    .then(response => response.json())
    .then(data => matchesParser(data));
}

export function fetchUpcomingMatches() {
  const url = buildURL(UPCOMING_MATCHES_URL, {
    competition_id: COMPETITION_ID
  });

  return fetch(url)
    .then(response => response.json())
    .then(data => upcomingMatchesParser(data));
}
