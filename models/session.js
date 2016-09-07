const bookshelf = require('../db/bookshelf');

require('./user')

let Session = bookshelf.Model.extend({
  tableName:sessions,
  user(){
    return this.belongsToMany('User');
  }
});

module.exports = bookshelf.model('Session', Session);
