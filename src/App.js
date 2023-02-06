import {useDispatch, useSelector} from "react-redux";
import {changeStatus, getAllProducts} from "./redux/reducers/products";
import {useEffect} from "react";



function App() {

  const {data, filter, status, error} = useSelector((state) => state.products )

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts(filter))
    },[filter])


  return (
    <div className="App">
      <h2>{filter.category}</h2>
      <div>
          {
              ['All', 'fish', 'meat', 'drinks'].map((item) => (
                  <button style={{background: filter.category === item ? 'red' : 'buttonface'}} type='button' onClick={() => dispatch(changeStatus(item))}>{item}</button>
              ))
          }
      </div>

        {
            status === 'loading' ? <h2>...Loading</h2> : status === 'error'? <h2>{error}</h2> :  data.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.categories}</p>
                </div>
            ))
        }

    </div>
  );
}

export default App;
