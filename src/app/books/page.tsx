import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { baseUrl, placeHolderImage, status } from '../../utils';
import { BookType } from '../../../types';
import Header from '../components/header';

const BooksPage = async () => {
  const res = await fetch(`${baseUrl}/api/v1/books`);
  const books = await res.json();

  return(
    <>
      <Header />
      <div className="container mx-auto my-10 px-4 py-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {books?.data && books.data.map((book: BookType) => (
            <div key={book.id} className="p-4 bg-white shadow-md rounded-lg">
              <Link href={`/books/${book.id}`} className="relative block rounded-tr-3xl border border-gray-100">
                <span
                  className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl
                            bg-purple-600 px-6 py-4 font-medium uppercase
                            tracking-widest text-white"
                >
                  {status(book.status)}
                </span>

                <img
                  src={book.cover_url || placeHolderImage }
                  alt={book.title}
                  className="-ml-6 -mt-6 h-80 w-full
                        rounded-bl-3xl rounded-tr-3xl
                        border border-gray-300 object-cover"
                />

                <div className="p-4 text-center">
                  <strong className="text-xl font-medium text-gray-900">{book.title}</strong>

                  <p className="mt-2 text-pretty text-gray-700">
                    {book.author}
                  </p>

                  <p className="mt-2 text-pretty text-gray-700">
                    {book.genre}
                  </p>

                  <span
                    className="mt-4 block rounded-md border border-indigo-900
                               bg-indigo-900 px-5 py-3 text-sm
                               font-medium uppercase tracking-widest
                               text-white transition-colors
                               hover:bg-white hover:text-indigo-900"
                  >
                    Show More
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default BooksPage
