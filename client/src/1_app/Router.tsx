import GuessMain from "@/3_pages/Guess-main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GuessMain />} ></Route>
            </Routes>
        </BrowserRouter>
    )
}