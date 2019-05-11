import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {increment} from '../AC';

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number,
    increment: PropTypes.func.isRequired
  };

  handleIncrement = () => {
    const {increment} = this.props;
    increment();
    // this.props.dispatchIncrement()
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>{this.props.counter}</h2>
        <button onClick={this.handleIncrement}>Increment me</button>
      </div>
    );
  }
}

export default connect((state) => ({
  counter: state.count
}), {increment})(Counter);



// // -----Different way------
//
// // Дістає дані з `store` і передає нашому компонентові
// function mapStateToProps(state) {
//   return {
//     counter: state.count
//   }
// }
//
// const mapToDispatch = {
//   dispatchIncrement: increment
// };
//
// // Метод `connect` для з'єднання компоненти з `store`.
// // Другий параметр загортає `Action Creator` в `dispatch`.
// // Передаємо другим параметром об'єкт `mapToDispatch`
// // Замість того, щоб не писати в функції `handleIncrement` таке: `this.props.dispatch(increment())` напишемо `this.props.dispatchIncrement()`
// const decorator = connect(mapStateToProps, mapToDispatch);
//
// export default decorator(Counter);