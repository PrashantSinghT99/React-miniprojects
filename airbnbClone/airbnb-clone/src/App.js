
import './App.css';
import Cards from "./Components/Cards"
import Header from "./Components/Header"
import Nav from "./Components/Nav"
import data from "./data.js"
function App() {

  const obj = data.map(ele => {
    return (
      <Cards
        img={ele.coverImg}
        rating={ele.stats.rating}
        reviewCount={ele.stats.reviewCount}
        location={ele.location}
        title={ele.title}
        price={ele.price}
        key={ele.id}
      />)

  });


  return (
    <div className="App">
      <Nav></Nav>
      <Header></Header>
      <section className="cards-list">
        {obj}
      </section>
    </div>
  );
}

export default App;
