import constants from './constants';
import { generator } from '../test/mock';
import Generator from './models/generator';

export default function reducer (state, action) {
	switch (action.type) {
	case 'EXAMPLE_MUTATION':
		state.example = action.payload;
		return state;	

	case 'BUY_GENERATOR':
		const generator = new Generator(Object.assign({}, state.generators[action.payload.attribute]))
		if(action.payload.attribute != null && state.counter >= generator.getCost()){
			state.generators[action.payload.attribute].quantity += action.payload.quantity
			state.counter = state.counter - state.generators[action.payload.attribute].baseCost
			state.generators[action.payload.attribute].baseCost = generator.getCost()
		} else {
			for (var x in state.generators) {
				if (state.generators[x].name === action.payload.name) {
					state.counter -= state.generators[x].baseCost
					state.generators[x].quantity += action.payload.quantity
				}
			}	
		}

		return state;
	case 'INCREMENT_COUNTER':
		state.counter = action.payload + 1;
		return state;
	default:
		return state;
	}
}