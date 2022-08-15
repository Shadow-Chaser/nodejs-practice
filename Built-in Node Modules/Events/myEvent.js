const EventEmitter = require('events');

class myEvent extends EventEmitter {
    func1 = () => {
        this.emit('event3');
    }
}

module.exports = myEvent;