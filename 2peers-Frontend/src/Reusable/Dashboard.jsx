import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <header className="bg-white shadow flex items-center justify-between">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M161 188.375C170 193.5 177.919 193.854 186 188.375C197.919 180.294 197.919 159.581 186 151.5C177.919 146.021 169.081 146.021 161 151.5C149.081 159.581 152 183.25 161 188.375ZM145.5 70.5C127 70.5 112 24.5202 89.5 42C77.6254 51.2251 94.3244 85.6756 87.5 92.5C81.0365 98.9635 61.5 85.5 53.5 112C45.5 138.5 74.5 143.25 74.5 154C74.5 164.751 36.6441 162.082 39.5 185.5C42 206 86.5365 194.537 93 201C100.5 213.5 52 251.495 80 263.5C103 273.362 118 222.5 141 222.5C151.261 222.5 156.5 271.5 182.5 268C202.988 265.242 192.5 222.5 205.5 213.5C218.5 204.5 267.5 235 279.5 213.5C292.936 189.427 235.5 171 235.5 154C232.5 135.5 282.5 113.5 267.5 87.5C254.5 70.5 218 96 201.5 92.5C186 84 196 42 175.5 38C157.5 31.5 155.991 70.5 145.5 70.5ZM138 129C129.877 116.815 108.623 116.815 100.5 129C95.0844 137.123 95.0844 145.877 100.5 154C108.623 166.185 129.877 166.185 138 154C143.416 145.877 143.416 137.123 138 129Z" fill="#173CFF" />
        </svg>
        <h1 className="text-3xl font-bold text-purple-900">
          WELCOME TO 2PEERS TUTORING
        </h1>
        <h2 className="text-2xl font-bold text-gray-700">WE HAVE A LOT IN STORE FOR YOU</h2>
        <h4>Missing an account? No worries</h4>
        <Link to="/signUp">
          <p className="font-medium text-indigo-600 hover:text-indigo-500">Sign up here!</p>
        </Link>
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M232.5 256C225 251 209.5 262.5 224 281.5C232.736 292.948 238.561 297.756 251 290.5C257 287 256.114 271.924 250 264.5C243.886 257.076 240 261 232.5 256ZM147 92.5C118.738 94.6708 118 17 93 44C68 71 123.543 76.5 108 101.5C90.5 115 70.81 98.3664 64 115C56.7766 132.643 91.1967 136.948 90.5 156C89.4406 184.974 19.1766 161.499 24.5 190C29.9178 219.006 78.6461 172.635 100 193C130.207 221.808 1 248.5 58.5 291.5C94.5576 318.465 114.991 206.551 140.5 211C183.5 218.5 134.5 294 186.5 279.5C207.5 273 174.638 224.658 196 204C223.117 177.777 275.916 253 291.5 218.5C311.375 174.5 228.698 194.565 224 160C219.553 127.282 291.5 123.5 267.5 87.5C238.5 57 247 125.5 196 105.5C147 92.5 229.5 13.5 173.5 2.5C140.5 2.49999 183.532 89.694 147 92.5ZM45 92.5C36.8766 80.3149 14.1234 75.3149 6.00001 87.5C0.584412 95.6234 2.00001 120.357 14.5 115C27.9606 109.231 36.8766 124.685 45 112.5C50.4156 104.377 50.4156 100.623 45 92.5Z" fill="#A91CFF" />
        </svg>
      </div>
    </header>
  );
}

export default Dashboard;
