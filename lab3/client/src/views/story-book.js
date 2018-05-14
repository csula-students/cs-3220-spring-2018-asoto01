export default function (store) {
	return class StoryBookComponent extends window.HTMLElement {
		constructor () {
			super();
			this.store = store;
			// TODO: initial DOM rendering of story itself
			this.onStateChange = this.handleStateChange.bind(this);
			this.textContent = this.store.state.story.state;
			this.render();
		}

		handleStateChange (newState) {
			// TODO: display story based on the state "resource" and "stories")
			this.render();
		}

		connectedCallback () {
			this.render();
			this.store.subscribe(this.onStateChange);
		}

		disconnectedCallback () {
			this.render();
			this.store.unsubscribe(this.onStateChange);
		}

	render () {
		

		for(var x in store.state.story){
			if(store.state.story[x].state == 'visible'){
				this.innerHTML = `<h2>${store.state.story[x].description}</h2>`;
			}
		}


		}
		
	};
}