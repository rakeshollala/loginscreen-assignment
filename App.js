import './App.css'
const App =()=>{
  return (
    <div className='maincontainer'>
      <h1 className='heading'>Login</h1>
      <form>
      <input type="text" placeholder="username" className='inputs'/><br/>
      <input type="password" placeholder="password" className='inputs'/><br/>
      <button className='inputs' id='inputs1'>submit</button>
      </form>
    </div>
  )
}
export default App;