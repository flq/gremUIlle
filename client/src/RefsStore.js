export default class RefsStore {

    constructor() {
        this.store = {};
    }

    addRef(name, ref) {
        this.store[name] = ref;
    }

    getRef(name) {
        return this.store[name];
    }
}