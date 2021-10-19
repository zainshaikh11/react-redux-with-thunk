import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { reducerOne } from './reducers/reducer_one'
import ShowActivity from './pages/ShowActivity'

const store = createStore(
  reducerOne,
  applyMiddleware(thunk)
)

function App() {
  return (
    <Provider store={store}>
      <ShowActivity />
    </Provider>
  );
}

export default App;
