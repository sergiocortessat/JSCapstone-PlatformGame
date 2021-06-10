const data = (function () {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/pP2hIZr3M3n8eNSmS7oT/scores/';
  const data = {};

  async function post() {
    const fullData = data;
    try {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(fullData),
      });
      console.log('response Ok');
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error(`Could not reach the API: ${err}`);
    }
  }

  async function get() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {
      throw new Error(`Somethig went wrong: ${err}`);
    }
  }

  const nameSetter = (name) => {
    data.user = name;
  };

  const scoreSetter = (score) => {
    data.score = score;
  };

  return {
    post,
    get,
    nameSetter,
    scoreSetter,
    data,
  };
}());

export default data;
