export default function PropertyOwner() {
    return (
      <div className="mt-6 p-4 border rounded-lg flex items-center space-x-4">
        <img src="/owner.jpg" className="w-16 h-16 rounded-full" alt="Owner" />
        <div>
          <h3 className="text-lg font-semibold">Oshikoshi Akinda</h3>
          <p className="text-gray-500">⭐⭐⭐⭐⭐ 5.0</p>
          <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded-md">Message</button>
        </div>
      </div>
    );
  }
  