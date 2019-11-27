import { upcomingMatchesParser, matchesParser } from "../lib/matchesParser";

export function fetchPastMatches() {
  return fetch("/past")
    .then(response => response.json())
    .then(data => matchesParser(data));
}

export function fetchLiveMatches() {
  return fetch("/live")
    .then(response => response.json())
    .then(data => matchesParser(data));
}

export function fetchUpcomingMatches() {
  return fetch("/upcoming")
    .then(response => response.json())
    .then(data => upcomingMatchesParser(data));
}
