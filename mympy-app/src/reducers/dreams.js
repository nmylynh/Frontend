import {
	FETCH_DREAMS_START, //Fetches all dreams from dream table
	FETCH_DREAMS_SUCCESS,
	FETCH_DREAMS_FAILURE,
	ADD_DREAM_START, //Adds dream to dreams table
	ADD_DREAM_SUCCESS,
	ADD_DREAM_FAILURE,
	ADD_IMAGE_START, //Adds image to images table
	ADD_IMAGE_SUCCESS,
	ADD_IMAGE_FAILURE,
	UPDATE_DREAM_START, //Updates dream by id
	UPDATE_DREAM_SUCCESS,
	UPDATE_DREAM_FAILURE,
	DELETE_DREAM_START, //Deletes dream by id from dreams table
	DELETE_DREAM_SUCCESS,
	FETCH_DREAM_START, //Fetches single dream by id
	FETCH_DREAM_SUCCESS,
	FETCH_DREAM_FAILURE,
	FETCH_USER_DREAMS_START,
	FETCH_USER_DREAMS_SUCCESS,
	FETCH_USER_DREAMS_FAILURE,
	FETCH_IMAGE_START, //Fetched single image by dream id
	FETCH_IMAGE_SUCCESS,
	FETCH_IMAGE_FAILURE,
	DELETE_DREAM_FAILURE,
	SET_DREAMCARDS, //save Dream state section
	UPDATE_SEARCH, // UPDATING SEARCH TERM
	DONO_FETCH
} from '../actions'

const INITIAL_STATE = {
	fetching: false,
	donoFetch: false,
	errors: [],
	deletingDream: false,
	posting: false,
	postingImage: false,
	dreamId: null,
	userDreams: [],
	isUpdating: false,
	fetchingImage: false,
	dreams: [],
	imageById: [],
	dreamCards: {},
	searchDreams: "",
	featured: [
		{
			id: 1,
			title: "Dream #1",
			cardImg: "https://idahovirtualreality.com/wp-content/uploads/2017/06/IMG_0309-e1498159311484.jpg",
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			type: 'VR School Systems',
			donationsReceived: 378,
			donationGoal: 500,
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City"
			}
		},
		{
			id: 2,
			title: "Dream #2",
			cardImg: "https://idahovirtualreality.com/wp-content/uploads/2017/06/IMG_0309-e1498159311484.jpg",
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			type: 'VR Health Education',
			donationsReceived: 628,
			donationGoal: 800,
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City"
			}
		},
		{
			id: 3,
			title: "Dream #3",
			cardImg: "https://idahovirtualreality.com/wp-content/uploads/2017/06/IMG_0309-e1498159311484.jpg",
			shortDescription: "A brief description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean neque eros, dignissim sed ultrices at, lacinia vehicula diam. Proin leo nisl, luctus vel consectetur ut, porttitor a turpis. Duis et metus vitae lectus pulvinar efficitur. Integer sodales gravida libero, ut dapibus risus gravida in. Quisque vitae justo imperdiet, sollicitudin velit a, facilisis elit. Donec eu lectus finibus, ornare felis eu, fermentum metus. Fusce pellentesque urna nec sapien facilisis auctor. Vestibulum eu ipsum sed dolor condimentum sollicitudin eu non nisi. Nunc eleifend malesuada vulputate. Praesent aliquam erat mauris, quis eleifend nunc cursus et. Cras hendrerit non odio vel fringilla.",
			type: 'VR Sports',
			donationsReceived: 378,
			donationGoal: 1000,
			user: {
				username: "johndoe",
				firstname: "John",
				lastname: "Doe",
				city: "City"
			}
		}
	],
	currDream: {},
	currDreamId: null
}

export default function dreamsReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_DREAMS_START:
			return {
				...state,
				fetching: true
			}
		case FETCH_DREAMS_SUCCESS:
			return {
				...state,
				fetching: false,
				dreams: action.payload
			}
		case FETCH_DREAMS_FAILURE:
			return {
				...state,
				fetching: false,
				errors: action.payload
			}
		case FETCH_DREAM_START:
			return {
				...state,
				fetching: true
			}
		case FETCH_DREAM_SUCCESS:
			return {
				...state,
				fetching: false,
				currDream: action.payload,
				currDreamId: action.payload.id,
				donoFetch: true,
			}
		case FETCH_DREAM_FAILURE:
			return {
				...state,
				fetching: false
			}
		case DONO_FETCH:
			return {
				...state,
				donoFetch: false
			}
		case FETCH_USER_DREAMS_START:
			return {
				...state,
			}
		case FETCH_USER_DREAMS_SUCCESS:
			return {
				...state,
				userDreams: action.payload
			}
		case FETCH_USER_DREAMS_FAILURE:
			return {
				...state,
				errors: action.payload
			}
		case UPDATE_DREAM_START:
			return {
				...state,
				isUpdating: true
			}
		case UPDATE_DREAM_SUCCESS:
			const filtered = state.userDreams.filter(dream => {
				return dream.id !== action.payload.id;
			});
			return {
				...state,
				isUpdating: false,
				userDreams: [...filtered, action.payload]
			}
		case UPDATE_DREAM_FAILURE:
			return {
				...state,
				isUpdating: false,
				errors: action.payload
			}
		case ADD_DREAM_START:
			return {
				...state,
				posting: true,
				dreamId: null
			}
		case ADD_DREAM_SUCCESS:
			return {
				...state,
				posting: false,
				dreamId: action.payload
			}
		case ADD_DREAM_FAILURE:
			return {
				...state,
				posting: false,
				errors: action.payload
			}
		case ADD_IMAGE_START:
			return {
				...state,
				postingImage: true,
			}
		case ADD_IMAGE_SUCCESS:
			return {
				...state,
				postingImage: false,
			}
		case ADD_IMAGE_FAILURE:
			return {
				...state,
				postingImage: false,
				errors: action.payload
			}
		case FETCH_IMAGE_START:
			return {
				...state,
				fetchingImage: true,
			}
		case FETCH_IMAGE_SUCCESS:
			return {
				...state,
				postingImage: false,
				imageById: action.payload
			}
		case FETCH_IMAGE_FAILURE:
			return {
				...state,
				postingImage: false,
				errors: action.payload
			}
		case DELETE_DREAM_START:
			return {
				...state,
				deletingDream: true
			}
		case DELETE_DREAM_SUCCESS:
			const { userDreams } = state;
			const filteredDreams = userDreams.filter(dream => {
				return dream.id !== action.payload;
			});
			return {
				...state,
				deletingDream: false,
				userDreams: [...filteredDreams]
			}
		case DELETE_DREAM_FAILURE:
			return {
				...state,
				deletingDream: false,
				errors: action.payload
			}
		case SET_DREAMCARDS:
			return {
				...state,
				dreamCards: { ...state.dreamCards, ...action.payload }
			}
		case UPDATE_SEARCH:
			return {
				...state,
				searchDreams: action.payload
			}
		default:
			return state;
	}
}