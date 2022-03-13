import ReactDOM from "react-dom";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


function App() {
return (
    <div>
        <Header />
        <Main /> 
        <Footer />
    </div>

);
}

ReactDOM.render(<App />, document.querySelector(".root"));