export default function (store) {
	return class ButtonComponent extends window.HTMLElement {
		constructor () {
			super();
			this.store = store;

			// TODO: render generator initial view

			// TODO: subscribe to store on change event

			// TODO: add click event		
			this.addEventListener('click', () => {
				this.store.dispatch({
					type: 'INCREMENT_CLICK',
					payload: this.store.state.counter
				});
			});
			this.innerHTML = `<button>Generate 1 BTC</button>`;
		}
		
	};
}
