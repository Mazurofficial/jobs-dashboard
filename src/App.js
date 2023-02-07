import './App.css';
import { JobList } from './features/positions/JobList';
import { TheHeader } from './components/TheHeader';
import { FilterPanel } from './features/filter/FilterPanel';

function App() {
   return (
      <div className="App">
         <TheHeader />
         <div className="container">
            <FilterPanel />
            <JobList />
         </div>
      </div>
   );
}

export default App;
