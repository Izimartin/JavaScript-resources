interface Observable {
    attach(o: Observer);
    detach(o: Observer);
    notify();
}

interface Observer {
    update();
}

class YoutubeChannel implements Observable {

    private channelSubscribers: Observer[] = [];
    private lastVideoPosted: string = '';

    attach(o: Observer) {
        this.channelSubscribers.push(o);
    }
    detach(o: Observer) {
        this.channelSubscribers.pop();

    }
    addNewVideo(title: string) {
        this.lastVideoPosted = title;
        this.notify();
        console.log('New video added to channel')
    }
    lastVideoTitle() {
        return this.lastVideoPosted
    }
    notify() {
        for (let subscriptor of this.channelSubscribers) {
            subscriptor.update();
        }
    }

}

class Subscriber implements Observer {
    private observable = null;
    constructor(observable: YoutubeChannel) {
        this.observable = observable;
    }

    update() {
        console.log('New video posted')
        console.log(this.observable.lastVideoTitle());
    }

}

let channel = new YoutubeChannel();
let s1 = new Subscriber(channel);
let s2 = new Subscriber(channel);

channel.attach(s1);
channel.attach(s2);

channel.addNewVideo('Video patron observer')
