// Setting up the games state
const gamesState = {
	popularGames: [],
	upcomingGames: [],
  newGames: [],
  searchedGames: []
};

// Setting up the games reducer
const gamesReducer = (state = gamesState, action) => {
	switch (action.type) {
		case "FATCH_GAMES":
			return { ...state };
		default:
			return { ...state };
	}
};

export default gamesReducer;
