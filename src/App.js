import Header from './components/Header'

function App() {
  const name = 'Brad'
  const x = false
  return (
    <div className="container">
      <h1> Hello From React</h1>
      <h2>Hello {x ? 'Yes' : 'No'}</h2>
      <Header title = {1}/>
      
      <Header/>
    </div>
  );
}


export default App;
