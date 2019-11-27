import { upcomingMatchesParser, matchesParser } from "../lib/matchesParser";

const BASE_URL = "http://localhost:4000";

export function fetchPastMatches() {
  return fetch(`${BASE_URL}/past`)
    .then(response => response.json())
    .then(data => matchesParser(data));
}

export function fetchLiveMatches() {
  return fetch(`${BASE_URL}/live`)
    .then(response => response.json())
    .then(data => matchesParser(data));
}

export function fetchUpcomingMatches() {
  return fetch(`${BASE_URL}/upcoming`)
    .then(response => response.json())
    .then(data => upcomingMatchesParser(data));
}
