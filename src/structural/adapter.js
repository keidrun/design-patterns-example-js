// Objects
class FacebookMessenger {
  constructor() {
    this._name = 'facebook';
  }
  send(message) {
    console.log('Send to : ' + this._name);
    console.log('Send a message : ' + message);
  }
  setName(name) {
    this._name = name;
  }
}

class MessengerAdapter {
  constructor(name) {
    this._messenger = new FacebookMessenger();
    this._messenger.setName(name);
  }
  send(message) {
    this._messenger.send(message);
  }
}

class TwitterMessenger {
  constructor() {
    this._name = 'twitter';
    this._adapter = new MessengerAdapter(this._name);
  }
  send(message) {
    this._adapter.send(message);
  }
}

// Test
const facebook = new FacebookMessenger();
facebook.send('Hello, Keid!');

const twitter = new TwitterMessenger();
twitter.send('How are you?');
