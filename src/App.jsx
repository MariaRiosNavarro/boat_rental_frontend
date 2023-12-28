import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Add from "./pages/Add";
import Home from "./pages/Home";
import Header from "./components/General/Header";
import List from "./pages/List";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boats" element={<List listType="boats" />} />
          <Route path="/boat/:id" element={<Detail detailtype="boats" />} />
          <Route path="/add-boat" element={<Add formType="boats" />} />
          <Route path="/rentals" element={<List listType="rentals" />} />
          <Route path="/rental/:id" element={<Detail detailtype="rentals" />} />
          <Route path="/rent" element={<Add formType="rentals" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
