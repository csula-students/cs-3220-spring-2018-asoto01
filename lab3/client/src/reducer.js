import constants from './constants';
import { generator } from '../test/mock';
import Generator from './models/generator';
import Story from './models/story'

export default function reducer (state, action) {
	switch (action.type) {
		case 'EXAMPLE_MUTATION':
			state.example = action.payload;
			return state;	

		case 'BUY_GENERATOR':
			const generator = new Generator(Object.assign({}, state.generators[action.payload.attribute]))
			if(action.payload.attribute != null && state.counter >= generator.getCost()){
				state.generators[action.payload.attribute].quantity++
				state.counter -= state.generators[action.payload.attribute].baseCost
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

		case 'INCREMENT_CLICK':
			state.counter = action.payload + 1;
			return state;

		case 'INCREMENT':
			if(action.payload > 0){
			state.counter += action.payload;
			}
			for (var x in state.generators) {
				if (this.state.generators[x].quantity >= 1) {
				state.counter += state.generators[x].rate
			}
		}	
			return state;

		case 'CHECK_STORY':
			for (var x in state.story) {
				const checkStory = new Story(Object.assign({}, state.story[x]))
				if (checkStory.isUnlockYet(state.counter)) {
					state.story[x].state = checkStory.unlock();
				}

			}	

			return state;

	default:
		return state;
	}
}