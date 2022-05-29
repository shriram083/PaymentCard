import Cards from './components/Cards';
import './App.css';

function App() {
  let cardData = [
    {
      "date": "28/10/2020",
      "img": "https://pngimg.com/uploads/amazon/amazon_PNG5.png",
      "title": "Amazon Gift Pay",
      "details": ["Desktop", "Mobile"],
    },
    {
      "date": "17 Sept 2020",
      "img": "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
      "title": "Apple Gift Payment",
      "details": ["MacOS", "Mobile"],
    }
  ];
  return (
    <div className="App">
      <Cards cardData={cardData}/>
    </div>
  );
}

export default App;
