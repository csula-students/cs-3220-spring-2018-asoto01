// PubSub is single object for publish data to multiple subscribers
class PubSub {
    constructor () {
        this.subscribers = [];
    }

    // subscribe allows a new subscriber to listen for changes by providing
    // callback function in the parameter
    subscribe (fn) {
        this.subscribers.push(fn);
    }

    // one can publish any data to subscribers
    publish (data) {
        this.subscribers.forEach(subscriber => {
            subscriber(data);
        });
    }
}

window.incrementalGame = {
  state: {
  counter: 0
  }
};

const pubSub = new PubSub();

pubSub.subscribe(data => {
    console.log(data);
});

var i = 0;
var counter = 0;
function buttonClick() {
	counter++;
	window.incrementalGame.state.counter = counter;
	i = i + 0.01;
	document.getElementById('inc').value = i;
}
