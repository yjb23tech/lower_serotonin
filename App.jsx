import { createRoot} from "react-dom/client";
import Footer from "./Footer.jsx";

const App = () => {

    return (
        <div>
            <Footer />
        </div>
    );
};

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
