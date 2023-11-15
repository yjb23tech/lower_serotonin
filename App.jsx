import { createRoot} from "react-dom/client";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

const App = () => {

    return (
        <div>
            <Header />
            <Footer />
        </div>
    );
};

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
