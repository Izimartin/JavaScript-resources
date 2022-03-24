var hero = {
    _name: 'Brealy Padron',
    getSecretIdentity: function () {
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity; //
console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity()); 