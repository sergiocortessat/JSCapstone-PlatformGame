import Data from './data';

const Board = (function () {
  const sortData = (data) => {
    const arr = data;
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1; j++) {
        if (arr[j].score < arr[j + 1].score) {
          const tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
        }
      }
    }
    return arr;
  };

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

  const create = () => {
    let data;
    Data.get().then((res) => {
      data = sortData(res.result);

      board(data);
    });
  };

  return { create };
}());

export default Board;
