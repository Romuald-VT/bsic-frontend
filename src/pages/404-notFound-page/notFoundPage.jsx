import Header from "../../components/Header/Navbar"


const NotFound = ()=>
{
    return(
        <main className="flex-row">
            <Header/>
            <div className="text-blue-600 text-8xl relative top-64 left-1/3 font-extrabold">
               404 not found
            </div>
        </main>
    )
}

export default NotFound