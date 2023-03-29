import logo from './logo.svg';
import './App.css';

function App() {
  const data = [
    1,
    "hello",
    [4, 5, 6],
    ['A','B', 'C'],
    { name: "ABC", age: 30 }
  ];
  
  const renderData = (item) => {
    if (typeof item === "number") {
      return <h1>Number: {item}</h1>;
    } else if (typeof item === "string") {
      return <h1>String: {item}</h1>;
    } else if (Array.isArray(item)) {
      return (
        <div>
          <h1>Array:</h1>
           <ul>
          {item.map((subitem) => (
            <li>{renderData(subitem)}</li>
          ))}
        </ul>
        </div>
       
      );
    } else {
      return (
        <div>
          <h1>Object:</h1>
          <h1>Name: {item.name}</h1>
          <h1>Age: {item.age}</h1>
        </div>
      );
    }
  };
   return (
      <div>
        {data.map((item) => (
          <div>{renderData(item)}</div>
        ))}
      </div>
    );
  
}

export default App;
