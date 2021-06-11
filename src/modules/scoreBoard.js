const board = (arr) => {
  const grid = document.querySelector('.grid');

  arr.slice(0, 5).forEach((item, i) => {
    const ranking = document.createElement('span', { class: 'ranking' });
    const name = document.createElement('span', { class: 'name' });
    const score = document.createElement('span', { class: 'score' });
    ranking.textContent = i + 1;
    name.textContent = item.user;
    score.textContent = item.score;
    grid.appendChild(ranking);
    grid.appendChild(name);
    grid.appendChild(score);
  });
};

export default board;
