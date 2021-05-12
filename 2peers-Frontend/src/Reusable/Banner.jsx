import { React } from 'react';

function Banner() {
  return (
    <div className="flex flex-col h-80">
      <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-3/6 flex items-center justify-center">
        <p className="text-4xl"> Banner</p>
      </div>
    </div>
  );
}

export default Banner;
