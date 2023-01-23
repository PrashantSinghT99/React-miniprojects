import Main from "./Components/Main"
import Nav from "./Components/Nav"
import './App.css';
import Input from "./Input"

function App() {

  const obj = Input.map((ele) => {
    return (<Main
      key={ele.id}
      title={ele.title}
      location={ele.location}
      googleMap={ele.googleMap}
      startDate={ele.date.startDate}
      endDate={ele.date.endDate}
      description={ele.description}
      Image={ele.Image}
    />)
  })

  return (
    <div className="App">
      <Nav />
      {obj}
    </div>
  );
}

export default App;
