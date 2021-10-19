import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import ShowActivity from "./pages/ShowActivity";
import { rootReducer } from "./reducers/root_reducer";
import ShowJoke from "./pages/ShowJoke";
import "./App.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="block__main">
        <div className="block__left">
          <ShowActivity />
        </div>
        <div className="block__right">
          <ShowJoke />
        </div>
      </div>
    </Provider>
  );
}

export default App;
