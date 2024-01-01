import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import DisplayBook from "./pages/DisplayBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/books/create" element={<CreateBook />}></Route>
        <Route path="/books/details/:id" element={<DisplayBook />}></Route>
        <Route path="/books/edit/:id" element={<EditBook />}></Route>
        <Route path="/books/delete/:id" element={<DeleteBook />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
};

export default App;
