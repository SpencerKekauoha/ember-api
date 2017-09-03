import Ember from 'ember';
import ENV from 'imdb/config/environment';
import RSVP from 'rsvp';

const apiKey = ENV.APP.api_key

// be searchable by Title, Director, Actor, IMDB ID,

export default Ember.Route.extend({
  model(query) {
    showData: return new Ember.RSVP.Promise(function(resolve, reject) {
        $.ajax({
            url:`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
            // url:`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=star%20wars&page=1&include_adult=false`
        }).then(response => {
            let viewData = [];
            response.results.map((res) => {
              (res.original_name === undefined) ? '' : viewData.push(res.original_name);
            })
            console.log(viewData);
            resolve(viewData);
        });
    });
  },
  actions: {
    queryApi: function(query) {
      this.model(query);
    }
  }
});
