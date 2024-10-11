const liveServer = require("live-server");

const params = {
	ignore: 'node_modules', 
	mount: [['node_modules', 'node_modules'], ['spec', 'spec'], ['config', 'config']],
  watch: ['index.html', 'spec/**/*.js'],
};
liveServer.start(params);