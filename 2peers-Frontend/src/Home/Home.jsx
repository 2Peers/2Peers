import React from 'react';
import Banner from '../Reusable/Banner';

const imageStyle = {
  height: '500px',
};

export default function Home() {
  return (
    <div>
      <Banner />
      <section className="max-w-5xl px-6 py-16 mx-auto">
        <div className="">
          <div className="items-center md:flex md:space-x-6">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800">
                2Peers
                <br />
                Mission Statement
              </h3>
              <p className="max-w-md mt-4 text-gray-600">
                2Peers mission is to improve the learning
                experience of students through the use of peer to peer
                learning. By creating a virtual classroom envirnment students are
                able interact with one another and improve their understanding
                of subjects by leveraging their peers knowledge.
              </p>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2">
              <div className="flex items-center justify-center">
                <div className="max-w-md">
                  <img
                    className="object-cover object-center w-full rounded-md shadow"
                    style={imageStyle}
                    alt="Side"
                    src="https://images.unsplash.com/photo-1618346136472-090de27fe8b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=673&q=80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-5xl px-6 py-16 mx-auto">
          <div className="items-center md:flex md:space-x-6">
            <div className="md:w-1/2">
              <div className="flex items-center justify-center">
                <div className="max-w-md">
                  <img
                    alt="side"
                    className="object-cover object-center w-full rounded-md shadow"
                    style={imageStyle}
                    src="https://images.unsplash.com/photo-1616874535244-73aea5daadb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800">
                Our Team
              </h3>
              <p className="max-w-md mt-4 text-gray-600">
                Our team is composed of fullstack software developers
                and seeks to improve the educational experience of students
                through tools that allow them to communicate despite these
                trying times.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
