import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "./bookSlice";

const EditBook = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const { id, title, author } = location.state;
    console.log(id, title, author);

    const dispatch = useDispatch();
    const handleUpdateBook = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const author = form.author.value;
        const bookInfo = {
            id,
            title,
            author
        }
        console.log(bookInfo);
        dispatch(updateBook({ id, title, author }));
        form.reset();
        navigate("/allbooks", { replace: true });
    }
    return (
        <div>
            <form onSubmit={handleUpdateBook}>
                <label htmlFor="title">Book Name:</label>
                <br />
                <input type="text" name="title" id="title" placeholder="title" defaultValue={title} />
                <br />
                <label htmlFor="author">Author Name:</label>
                <br />
                <input type="text" name="author" id="author" placeholder="author" defaultValue={author} />
                <br />
                <input type="submit" value="Add Book" />
            </form>
        </div>
    );
};

export default EditBook;