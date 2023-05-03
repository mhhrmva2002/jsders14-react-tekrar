import {userState} from "react";
import Login from './Login';
import Welcome from './Welcome';
import {users} from './users.js';
function App() {
  let [issLoggodIn,setsIsLoggodIn]=userState(false);
  return (
    <>
   <div style={{display:'flex', justifyContent:'center'}}>
    {issLoggodIn ? <Welcome/>:<Login users={users}/>}
   </div>
    </>
  );
}

export default App;
