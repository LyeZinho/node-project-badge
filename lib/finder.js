var badge = require('project-badge');

module.exports = function(name) {
  switch(name) {
    case 'boolean': return badge.Boolean;
    case 'progress': return badge.Progress;
    default: throw new Error('Badge type not found: '+name);
  }
};
