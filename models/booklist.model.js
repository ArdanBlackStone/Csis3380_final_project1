const bookSchema = new Schema({
    bookTitle: { type: String, required: true },
    bookAuthor: { type: String, required: true },
    description: { type: String}
});

const Book = mongoose.model("300343373-buu", bookSchema);

export default Book;