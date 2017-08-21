import React from 'react';
import List from '../components/List.jsx';
import 'whatwg-fetch';
 
class ListContainer extends React.Component {
 
  constructor(props, context) {
    super();
    this.state = {
        players: []
    };
  }
 
  componentWillMount() {
    var self = this;
    fetch('http://shiny.flatbush.io:8000/pcmsplayers17')
      .then(function(response) {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
          }
      })
      .then(function(data) {
      	console.log(data)
        self.setState({
          players: data['players'].map( function(player, i) {
          	return { 
          		name: player['Player'], 
          		id: player['player_id'],
          		team: player['team_name'],
          		sal: player['sal_2017_18'],
          		imgUrl: 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/'+player['player_id']+'.png' 
          	};
          })
        });
      });
  }
 
  render() {
    return <List players={this.state.players} />;
  }
 
}
 
export default ListContainer;