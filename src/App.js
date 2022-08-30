
import './App.css';
import Counter from './features/counter/Counter';
import Posts from './features/posts/Posts';
import Todo from './features/todos/Todo';

function App() {
  return (
    <>
    <Todo></Todo>
    <hr /> <br />

    <Posts/>
    <hr /> <br />
    <Counter/>
    
    </>
  );
}

export default App;
