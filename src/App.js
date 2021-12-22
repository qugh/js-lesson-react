
import Header from "./containers/Header/Header";
import {TabNavigation} from "./containers/TabNavigation/TabNavigation";
import {Content} from "./containers/Content/Content";
import {Route, Routes} from "react-router-dom";
import {About} from "./containers/About/About";
import {Contacts} from "./containers/Contacts/Contacts";
import {createContext, useState} from "react";
export const StoreContext = createContext(
    {}
);
function App() {
    const [maxTableItems, setMaxTableItems] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const myStore = {
        tableItems: {maxTableItems, setMaxTableItems},
        currentPage: {currentPage, setCurrentPage}
    }
    return (
        <StoreContext.Provider value={myStore}>
            <Header/>
            <TabNavigation/>
            <Routes>
                <Route path="*" element={<Content/>}/>
                <Route path="/main" element={<Content/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
        </StoreContext.Provider>
    );
}

export default App;
