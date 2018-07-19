import { connect } from 'react-redux';
import App from '../App';
// import DashboardPage from '../DashboardPage.jsx';
import {onCollide} from '../actions/index';
import { moveObjects, startGame } from '../actions/index';

const mapStateToProps = state => ({
  x: state.x,
  y: state.y,
  r: state.r,
  score: state.score,
  color: state.color,
  gameState: state.gameState,
  lives: state.gameState.lives,

});

const mapDispatchToProps = dispatch => ({
  moveObjects: (mousePosition) => {
    dispatch(moveObjects(mousePosition));
  },
  onCollide: (mousePosition) => {
    dispatch(onCollide(mousePosition));
  },
  startGame: () => {
    dispatch(startGame());
  },
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Game;
