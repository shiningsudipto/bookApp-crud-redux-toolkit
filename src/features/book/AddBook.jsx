import { useSelector } from "react-redux";

const AddBook = () => {
    const booksLength = useSelector((state) => state.booksReducer.books.length)
    const handleBook = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const author = form.author.value;
        const bookInfo = {
            id: booksLength + 1,
            title,
            author
        }
        console.log(bookInfo);
    }
    return (
        <div>
            <h2>Add A Book</h2>
            <form onSubmit={handleBook}>
                <label htmlFor="title">Book Name:</label>
                <br />
                <input type="text" name="title" id="title" placeholder="title" />
                <br />
                <label htmlFor="author">Author Name:</label>
                <br />
                <input type="text" name="author" id="author" placeholder="author" />
                <br />
                <input type="submit" value="Add Book" />
            </form>
        </div>
    );
};

export default AddBook;