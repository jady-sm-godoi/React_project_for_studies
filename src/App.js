import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
// import { Component } from 'react';

const changeColor = () => {
  console.log('mudou de cor');
  document.querySelector('.App-header').style.backgroundColor = 'white';
};

function App() {
  const [counter, setCounter] = useState(0);
  const [reverse, setReverse] = useState(false);
  const reverseClass = reverse ? 'reverse' : '';

  // //componentDidUpdate - executa toda vez que o componente atualiza
  // useEffect(() => {
  //   console.log('executa toda vez que o componente é atualizado!');
  // });

  //componentDidMount - executa 1x
  useEffect(() => {
    console.log('executa só uma vez, quando a página é montada!');
    document.querySelector('.reverseClick')?.addEventListener('click', changeColor);

    //componentWillUnmount - limpeza dos eventListeners
    return () => {
      document.querySelector('.reverseClick')?.removeEventListener('click', changeColor);
    };
  }, []);

  // //com dependência - executa toda vez que a dependência mudar
  // useEffect(() => {
  //   console.log('executa quando o reverse é alterado');
  // }, [reverse]);

  const handleClick = () => {
    setReverse(!reverse);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="reverseClick" onClick={handleClick}>
          <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        </div>
        <div className="counter-container">
          <h1>contador: {counter}</h1>
          <div className="controls-container">
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
          </div>
        </div>
      </header>
    </div>
  );
}

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.handleClick = this.handleClick.bind(this);

//     this.state = {
//       reverse: false,
//     };
//   }

//   handleClick() {
//     const { reverse } = this.state;
//     this.setState({ reverse: !reverse });
//   }

//   render() {
//     const { reverse } = this.state;
//     const reverseClass = reverse ? 'reverse' : '';

//     return (
//       <div className="App">
//         <header className="App-header">
//           <div className="reverseClick" onClick={this.handleClick}>
//             <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
//           </div>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
