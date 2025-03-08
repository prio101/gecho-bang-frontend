import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const BookPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch book data from an API or database
      fetch(`/api/books/${id}`)
        .then(response => response.json())
        .then(data => setBook(data))
        .catch(error => console.error('Error fetching book:', error));
    }
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="h-32 rounded-lg bg-gray-200">
          <img
            src={book.coverImageUrl || "https://images.unsplash.com/photo-1741335661631-439871f2b3b6?q=80&w=1963&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            alt={"Book cover"}
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div className="h-32 rounded-lg bg-gray-200 lg:col-span-2">
          <h1>{book.title}</h1>
          <p>{book.description}</p>
        </div>
      </div>
    </>
  );
};

export default BookPage;
