export default function (store) {
	return class GeneratorComponent extends window.HTMLElement {
		constructor () {
			super();
			this.store = store;
			// TODO: render generator initial view
			this.render();
			// TODO: subscribe to store on change event
			this.onStateChange = this.handleStateChange.bind(this);

		 }
		handleStateChange () {
			this.render();
		}

		connectedCallback () {
			this.id = this.dataset.id;
			this.render();
			this.store.subscribe(this.onStateChange);
		}

		disconnectedCallback () {
			this.render();
			this.store.unsubscribe(this.onStateChange);
		}

		render () {
			this.innerHTML = `<div class="generators">
            <span class="resource btn">
                <div class="resource header">${this.store.state.generators[this.dataset.id].name}</div>
                <span class="resource header">
                    <div id="counterCoin">${this.store.state.generators[this.dataset.id].quantity}</div>
                </span>
            </span>
            <p class="description">${this.store.state.generators[this.dataset.id].description}</p>
            <p>${this.store.state.generators[this.dataset.id].rate}/60</p>
            <span class="resources">
                ${this.store.state.generators[this.dataset.id].baseCost}
                <button>Buy ${this.store.state.generators[this.dataset.id].name}</button>
            </span>
		</div>`;

		this.querySelector('button').addEventListener('click', () => {
			this.store.dispatch({
				type:'BUY_GENERATOR',
				payload: {
					attribute: this.getAttribute("data-id"),
					quantity: 1	
				}
			});
		});
		}
		
	};
}
