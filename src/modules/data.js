const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/v7ufg7BhT7XQTae6jSvX/scores';
const sendScore = async (name, score) => {
  try {
    const response = await fetch(URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'Application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: name, score: Number(score) }),
    });
    if (response.ok) {
      return response.json();
    }
  } catch (err) {
    throw new Error(err);
  }
};

const showScore = async () => {
  try {
    const response = await fetch(URL, {
      method: 'Get',
      mode: 'cors',
      headers: {
        Accept: 'Application/json',
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      return response.json();
    }
  } catch (err) {
    throw new Error(err);
  }
};

export { sendScore, showScore, URL };