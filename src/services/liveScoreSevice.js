import { buildURL } from "../lib/buildURL";
import { matchesParser } from "../lib/matchesParser";

const FROM = "2019-11-01";
const TO = "2019-11-25";
const COMPETITION_ID = "244";
const PAST_MATCHES_URL = "/api-client/scores/history.json";

export function fetchPastMatches(
  from = FROM,
  to = TO,
  competition_id = COMPETITION_ID
) {
  const url = buildURL({ baseUrl: PAST_MATCHES_URL, from, to, competition_id });
  return fetch(url)
    .then(response => response.json())
    .then(data => matchesParser(data));
}
