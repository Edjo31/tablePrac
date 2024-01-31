import react from 'react'
import ReactDOOM from 'react-dom/client'
import  {Order} from './components/Order'

const root =ReactDOOM.createRoot(document.getElementById("root"))

root.render(
    <>
    <Order />
    </>
)