import React from 'react';

class List extends React.Component {
  constructor(props){
    super(props);
  }
 
  render() {
    return <ul> {this.props.players.map(this.renderItem)} </ul>;
  }
 
  renderItem(player) {
  	console.log(player)
    return (
    	<div data-id={player.id}>
    	  <img src={player.imgUrl} width="50px"/>
    	  <table>
    	   <tr>
    	     <th>Player</th>
    	     <th>Team</th>
    	     <th>Salary</th>
    	   </tr>
    	   <tr>
    	     <td>{player.name}</td>
    	     <td>{player.team}</td>
    	     <td>{player.sal}</td>
    	   </tr>
    	  </table>
    	</div>
    	);
  }

}

export default List;