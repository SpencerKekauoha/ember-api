module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'imdb',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
