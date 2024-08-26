import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-xl font-bold">Ascend Agency</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#tutorial" className="text-gray-700 hover:text-gray-900">Video Tutorial</a></li>
            <li><a href="#how-to" className="text-gray-700 hover:text-gray-900">How To</a></li>
            <li><a href="#pr-questionnaire" className="text-gray-700 hover:text-gray-900">Download PR Questionnaire</a></li>
            <li><a href="#tv-questionnaire" className="text-gray-700 hover:text-gray-900">Download TV Questionnaire</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
