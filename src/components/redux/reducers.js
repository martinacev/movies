const initialState = {
	favorites: [],
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TO_FAVORITES": {
			// Check if the payload object's id is not already in favorites
			if (!state.favorites.some((obj) => obj.id === action.payload.id)) {
				return {
					...state,
					favorites: [...state.favorites, action.payload],
				};
			}
			return state;
		}

		default:
			return state;
	}
};

export default rootReducer;
