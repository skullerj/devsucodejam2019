const results = {
  rock: {
    scissors: 1,
    spock: -1,
    lizard: 1,
    paper: -1,
    rock: 0,
  },
  scissors: {
    scissors: 0,
    spock: -1,
    lizard: 1,
    paper: 1,
    rock: -1,
  },
  spock: {
    scissors: 1,
    spock: 0,
    lizard: -1,
    paper: -1,
    rock: 1,
  },
  lizard: {
    scissors: -1,
    spock: 1,
    lizard: 0,
    paper: 1,
    rock: -1,
  },
  paper: {
    scissors: -1,
    spock: 1,
    lizard: -1,
    paper: 0,
    rock: 1,
  },
};

function getResultString(score) {
  if (score === 0) return 'players tied';
  if (score < 0) {
    if (score === -1) {
      return 'player 2 won by 1 point';
    }
    return `player 2 won by ${Math.abs(score)} points`;
  }
  if (score === 1) {
    return 'player 1 won by 1 point';
  }
  return `player 1 won by ${score} points`;
}

function rochambeau(player1, player2) {
  if (!player1 || !player2) {
    return getResultString(0);
  }
  const smallestLength =
    player1.length < player2.length ? player1.length : player2.length;
  let score = 0;
  for (let i = 0; i < smallestLength; i++) {
    const player1Draw = player1[i];
    const player2Draw = player2[i];
    if (results[player1Draw] && results[player2Draw]) {
      score += results[player1Draw][player2Draw];
    }
    if (!results[player1Draw]) {
      score += -1;
    }
    if (!results[player2Draw]) {
      score += 1;
    }
  }
  return getResultString(score);
}

export default rochambeau;
