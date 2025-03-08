import Link from "next/link";

const Banner = () => {
  return(
      <section
        className="relative bg-[url(https://images.unsplash.com/photo-1550853123-b81beb0b1449?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-indigo-800">
              Gecho Bang
              <strong className="block font-extrabold text-indigo-700">
                Audiobook library
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              AI powered Open Source Audiobook library for everyone.
              Listen to your favorite books on the go. Self hosted and privacy focused.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                href="/books"
                className="block w-full rounded-sm bg-indigo-600
                           px-12 py-3 text-sm font-medium text-white
                           shadow-sm hover:bg-indigo-700 focus:ring-3
                           focus:outline-hidden sm:w-auto"
              >
                Go to your Library
              </Link>

              <Link
                href="https://github.com/prio101/gecho-bang-frontend"

                className="block w-full rounded-sm bg-white px-12 py-3 text-sm font-medium
                           text-indigo-600 shadow-sm
                           hover:text-indigo-700 focus:ring-3 focus:outline-hidden sm:w-auto"
              >
                Visit Github
              </Link>
            </div>
          </div>
        </div>
      </section>
  )
};

export default Banner;
