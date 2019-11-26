import env from "../config";

export function buildURL(options) {
  const baseUrl = `${options.baseUrl}?key=${env.API_KEY}&secret=${env.API_SECRET}`;

  const params = Object.keys(options)
    .map(key => `&${key}=${options[key]}`)
    .join();

  return baseUrl + params;
}
