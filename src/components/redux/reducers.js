const initialState = {
	favorites: [],

};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TO_FAVORITES": {
			if (!state.favorites.some((obj) => obj.id === action.payload.id)) {
				return {
					...state,
					favorites: [...state.favorites, action.payload],
				};
			}
			return state;
		}

		case "REMOVE_FROM_FAVORITES": {
			return {
				...state,
				favorites: state.favorites.filter(
					(movie) => movie.id !== action.payload
				),
			};
		}

		default:
			return state;
	}
};

export default rootReducer;
