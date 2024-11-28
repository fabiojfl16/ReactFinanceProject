import { SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';

function App() {
  const [search, setSearch] = useState<string>('');
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const onClick = async (e: SyntheticEvent) => {
    const result = await searchCompanies(search);

    if (typeof result === 'string') {
      setServerError(result);
    }
    else if (result !== undefined && Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
  }

  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange} />
      {serverError && <div>Unable to connect to API</div>}
      <CardList searchResults={searchResult} />
    </div>
  );
}

export default App;
