

function load(url) {
  return (fetch(url)
    .then((response) => {
      return response.json()
    }))
}

export default load