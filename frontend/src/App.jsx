import { Route, Routes } from "react-router"
import HomePage from "./components/HomePage"
import CreateNote from "./components/CreateNote"
import NoteDetail from "./components/NoteDetail"
import toast from "react-hot-toast"

const  App=()=> {
  return (
    <div data-themes="coffee">
    <button className="btn btn-primary"onClick={()=>toast.error("supper")} >click</button>
    <button className="btn btn-active">Default</button>
<button className="btn btn-active btn-primary">Primary</button>
<button className="btn btn-active btn-secondary">Secondary</button>
<button className="btn btn-active btn-accent">Accent</button>
<button className="btn btn-active btn-info">Info</button>
<button className="btn btn-active btn-success">Success</button>
<button className="btn btn-active btn-warning">Warning</button>
<button className="btn btn-active btn-error">Error</button>
      <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/create" element={<CreateNote/>}/>
    <Route path="/note/:id" element={<NoteDetail/>}/>
      </Routes>
    </div>
  )
}

export default App


