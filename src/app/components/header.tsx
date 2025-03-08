import Link from "next/link";
const Header = () => {
  return (
    <div>
      <header className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-indigo-500 sm:text-3xl">Gecho Bang</h1>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="inline-block rounded-sm bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:ring-3 focus:outline-hidden"

              >
                Home
              </Link>
              <Link
                href="/books"
                className="inline-block rounded-sm bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:ring-3 focus:outline-hidden"

              >
                Books
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
