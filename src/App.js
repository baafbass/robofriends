import React {useState,useEffect} from 'react';
import CardList from './CardList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'


function App (){

const [robots,setRobots] = useState([])
const [searchfield,setSearchfield] = useState('')
const [count,setCount] = useState(0)

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users => setRobots(users))      
},[count]) // only run when count change

 const onSearchChange = (event) =>
    {
      setSearchfield(event.target.value)
    }
	
      const filteredRobots = robots.filter(robot => 
      {
       return robot.name.toLowerCase().includes(searchfield.toLowerCase())
      })
      console.log(robots,searchfield);
    
    if(robots.length === 0)
    {
      return <h1>Loading</h1>
    } else { return (
	    <div className="tc">
	    <h1 className="f2">RoboFriends</h1>
	     <SearchBox searchChange ={onSearchChange}/>
       <button onClick={()=>setCount(count+1)}>Click Me!!</button>
       <Scroll>
       <ErrorBoundry>
        <CardList robots={filteredRobots}/>
        </ErrorBoundry>
        </Scroll>
        </div>	
    )}
}


export default App;