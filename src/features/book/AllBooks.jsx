import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./bookSlice";

const AllBooks = () => {
    const books = useSelector((state) => state.booksReducer.books);
    const dispatch = useDispatch();
    const handleBookDelete = (id) => {
        dispatch(deleteBook(id))
    }
    return (
        <div>
            <h2>All Books</h2>
            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <th className="theader">Title</th>
                            <th className="theader">Author</th>
                            <th className="theader">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books &&
                            books.map((book) => {
                                const { id, title, author } = book;
                                return (
                                    <tr key={id}>
                                        {/* <td>{id}</td> */}
                                        <td>{title}</td>
                                        <td>{author}</td>
                                        <td>
                                            <button>Edit</button>
                                            <button onClick={() => handleBookDelete(id)}>Delete</button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBooks;