import Browse from "./Browse";
import Login from "./Login";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";

const Applayout = () => {
    <div className="app">
       <Outlet/>
    </div>
}

const Body = ()=>{
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ]);
   // console.log(createBrowserRouter);
   //console.log(appRouter);
    return(

        <div>
            <RouterProvider router={appRouter}/>
           {/*  <Browse/>
            <Login/> */}
        </div>
    );
    
}

export default Body; 
