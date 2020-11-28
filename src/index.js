import './index.css';
import state from './redux/state.js';
import { rerenderEntireTree } from './render.js';
import * as serviceWorker from './serviceWorker';

rerenderEntireTree(state);
// ReactDOM.render(
//   <BrowserRouter>
//     <App state={state} addPost={addPost} />
//   </BrowserRouter>,
//   document.getElementById('root'),
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
