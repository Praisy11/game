
import React from "react";
import Picture from './components/Picture';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import card from "./card.json";
import './App.css';

class App extends React.Component{
  //set state to 0
  state ={
    score:0,
    topScore:0,
    card,
    clickedCard:[]
      }

      //card is taken out of clickedcard array
  imageClick = event => {
    const currentCard = event.target.alt;
    const CardAlreadyClicked =
      this.state.clickedCard.indexOf(currentCard) > -1;
// game is reset if clicked on alreadyclicked card
      if (CardAlreadyClicked) {
        this.setState({
          card: this.state.card.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCard: [],
          score: 0
        });
          alert("You lose. Play again?");

        } 
        //your score is increased and cards is shuffled
        else {
          this.setState(
            {
              card: this.state.card.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedCard: this.state.clickedCard.concat(
                currentCard
              ),
              score: this.state.score + 1
            },
// if u click on all 12 cards u win
            () => {
              if (this.state.score === 12) {
                alert("Yay! You Win!");
                this.setState({
                  card: this.state.card.sort(function(a, b) {
                    return 0.5 - Math.random();
                  }),
                  clickedCard: [],
                  score: 0
                });
              }
            }
          );
        }
      };

  

// components renders below
      render() {
        return (
          <div>
            <Navbar 
              score={this.state.score}
            />
            <Header />
            <div className="content">
              {this.state.card.map(card => (
                <Picture
                  imageClick={this.imageClick}
                  id={card.id}
                  key={card.id}
                  image={card.image}
                />
              ))}
            </div>
            <Footer />
          </div>
        );
      }
    }
    export default App;

