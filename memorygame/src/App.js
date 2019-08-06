import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  state = {
    friends,
    score: 0,
    highscore: 0
  };

  handleIncrement = id => {
    this.state.friends.filter((friend, index) => {
      //for each friend card id selected matching parameter id
      if (friend.id === id) {
        //for each friend card selected in friends array
        friends[index].score === 0
          ? (friends[index].score =
              friends[index].score + 1 &&
              this.setState({ score: this.state.score + 1 }))
          : this.restart();
      }
    });
  };

  restart = () => {
    this.state.score > this.state.highscore
      ? this.setState({ highscore: this.state.score })
      : this.setState({ highscore: this.state.highscore });
    //set the selection for each card to 0 as well as score
    this.state.friends.map(friend => (friend.score = 0));
    this.setState({ score: 0 });
    alert("G A M E  O V E R !");
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Title score={this.state.score} highscore={this.state.highscore}>
          MEMORY GAME
        </Title>
        <Wrapper>
          {this.state.friends
            .sort(() => Math.random() - 0.5)
            .map(friend => (
              <FriendCard
                id={friend.id}
                key={friend.id}
                image={friend.image}
                handleIncrement={this.handleIncrement}
              />
            ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
