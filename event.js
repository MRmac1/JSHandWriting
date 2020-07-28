// 实现 Event 功能，可以addListener，emit，removeLisenter

class EventEmeitter {
  constructor() {
    this._events = this._events || new Map();
    this._maxListeners = this._maxListeners || 10;
  }

  addListener(eventName, fn) {
    if(!this._events.get(eventName)) {
      this._events.set(eventName, fn)
    }
  }

  emit(eventName, ...args) {
    const handler = this._events.get(eventName);
    if (args.length > 0) {
      handler.apply(this, args);
    } else {
      handler.call(this, args);
    }
    return true;
  }
}

const emitter = new EventEmeitter();

emitter.addListener('haha', (name) => {
  console.log('emit haha', name);
});

emitter.emit('haha', 'lu')
