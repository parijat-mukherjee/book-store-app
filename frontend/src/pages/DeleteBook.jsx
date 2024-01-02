import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const DeleteBook = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .delete(`https://bookstore-backend-gbsq.onrender.com/books/${id}`)
      .then((response) => {
        console.log(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return <div>{isLoading ? <Spinner /> : "Book deleted"}</div>;
};

export default DeleteBook;
