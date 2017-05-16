var foot = {
	kick: () => {
		this.yelp = 'Ouch!'
		setImmediate(_ => { console.log(this.yelp) }) 
	}
};

foot.kick();
