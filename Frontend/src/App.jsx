import { BrowserRouter,Route,Routes} from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import MyFiles from "./pages/MyFiles";
import Subscription from "./pages/Subscription";
import Transaction from "./pages/Transaction";
import Upload from "./pages/Upload";

const App=()=>{
  return(
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/upload" element={<Upload/>}/>
    <Route path="/my-files" element={<MyFiles/>}/>
    <Route path="/subscription" element={<Subscription/>}/>
    <Route path="/Transactions" element={<Transaction/>}/>
     </Routes>
   </BrowserRouter>
  )
}

export default App;