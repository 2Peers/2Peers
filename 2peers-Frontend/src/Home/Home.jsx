import React from 'react';
import Footer from '../Reusable/Footer';

export default function Home() {
  return (
    <div>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-20 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="text-s text-indigo-500 tracking-widest font-medium title-font mb-1">
              WELCOME
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">2Peers : Bringing Students Together</h1>
            <br />
            <p className="mb-6 leading-relaxed">
              2Peers mission is to improve the learning
              experience of students through the use of peer to peer
              learning. By creating a virtual classroom, environment students are
              able interact with one another and improve their understanding
              of subjects by leveraging their peers knowledge.
            </p>
          </div>
          <div>
            <img src="https://static.vecteezy.com/system/resources/previews/001/187/438/original/heart-png.png" alt="books stack" className="w-40 h-40 animate-pulse" />
          </div>
          {/* <div className="portrait">
            <img className="portrait__img animate-spin" src="https://www.pngkey.com/png/full/512-5127105_steven-bucks-sunglasses-260315wd-de-steven-universe-steven.png" alt="Me" />
            <img className="portrait__img" src="https://www.pngkit.com/png/full/115-1156327_steven-universe-steven-quartz-universe-su-gem-steven.png" alt="Me" />
          </div> */}
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
            </svg>
            <p className="leading-relaxed text-lg">
              Education is the most powerful weapon which you can use to change the world
            </p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Nelson Mandela</h2>
            {/* <p className="text-gray-500">Senior Product Designer</p> */}
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 md:w-22 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.unsplash.com/photo-1610928712141-a292b96f43e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.unsplash.com/photo-1578048421563-9aa187e12baf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2290&q=80" />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://images.unsplash.com/photo-1556208738-7a57e7b96aed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2091&q=80" />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1361&q=80" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.unsplash.com/photo-1567524486765-e09966451cee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.unsplash.com/photo-1529473814998-077b4fec6770?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-700 body-font border-t border-gray-200 mb-20">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">MEET THE TEAM</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Our Wonderful Engineers</h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://img.icons8.com/plumpy/64/000000/k-on.png" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">ITZEL RENDON</h2>
                <p className="text-gray-500">Scrum Master</p>
                <a href="https://www.linkedin.com/in/itzel-rendon-01/" target="_blank" rel="noreferrer" className="text-indigo-500 inline-flex items-center pt-3">
                  LinkedIn Profile
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://img.icons8.com/color/64/000000/jason-voorhees.png" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">JASON ALVAREZ</h2>
                <p className="text-gray-500">Product Manager</p>
                <a href="https://www.linkedin.com/in/jason-alvarez/" target="_blank" rel="noreferrer" className="text-indigo-500 inline-flex items-center pt-3">
                  LinkedIn Profile
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://img.icons8.com/color/64/000000/mummy.png" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">ANDREA Y.</h2>
                <p className="text-gray-500">Develpoment Team</p>
                <a href="https://www.linkedin.com/in/andrea-young-770038167/" target="_blank" rel="noreferrer" className="text-indigo-500 inline-flex items-center pt-3">
                  LinkedIn Profile
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

// 2Peers mission is to improve the learning
// experience of students through the use of peer to peer
// learning. By creating a virtual classNameNameroom envirnment students are
// able interact with one another and improve their understanding
// of subjects by leveraging their peers knowledge.

//   Our team is composed of fullstack software developers
// and seeks to improve the educational experience of students
// through tools that allow them to communicate despite these
// trying times.

// https://images.unsplash.com/photo-1618346136472-090de27fe8b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=673&q=80
// https://images.unsplash.com/photo-1616874535244-73aea5daadb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80
