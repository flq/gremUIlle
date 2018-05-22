/**
 * Make a POST request
 * @param { string } url
 * @param { object } data
 */
export async function postData(url, data) {
  // Default options are marked with *
  const response = await fetch(url, {
    body: JSON.stringify(data),
    cache: "no-cache",
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
      "content-type": "application/json"
    },
    method: "POST" // *GET, POST, PUT, DELETE, etc.
  });
  if (response.status === 500) {
    throw new Error(await response.text());
  }
  return await response.json();
}
