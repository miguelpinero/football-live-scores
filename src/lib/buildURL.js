import env from "../config";

export function buildURL(baseUrl, options) {
  const url = `${baseUrl}?key=${env.API_KEY}&secret=${env.API_SECRET}`;

  const params = Object.keys(options)
    .map(key => `&${key}=${options[key]}`)
    .join("");

  return url + params;
}
