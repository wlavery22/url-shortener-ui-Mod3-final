export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
      // .then(data => console.log(data))
}

export const postUrls = async (newUrl) => {
  const response = await fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    body: JSON.stringify({
      long_url: newUrl.urlToShorten,
      title: newUrl.title
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return await response.json()
}
