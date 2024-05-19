import logo from './logo.svg';
//TopPageコンポーネントも外に運び出されているので、これをApp.jsで読み込み

import TopPage from './pages/TopPage';
import './App.css';

function App() {
  return (
    <div>
      <TopPage />
    </div>
  );
}

export default App;
