export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p>&copy; 2025 CQTA Canada. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span>Language:</span>
            <select className="bg-gray-700 text-white px-2 py-1 rounded">
              <option>EN</option>
              <option>FR</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
}