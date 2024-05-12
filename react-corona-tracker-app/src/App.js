import logo from './logo.svg';
//TopPageコンポーネントも外に運び出されているので、これをApp.jsで読み込み

import TopPage from './pages/TopPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>ようこそ</h1>
      <TopPage />
    </div>
  );
}

export default App;
