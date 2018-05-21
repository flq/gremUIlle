export async function postData(url, data) {
    // Default options are marked with *
    const response = await fetch(url, {
      body: JSON.stringify(data),
      cache: 'no-cache',
      credentials: 'same-origin', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
    });
    return await response.json();
  }