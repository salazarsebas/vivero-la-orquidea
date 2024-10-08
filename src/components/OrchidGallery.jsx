import { useState } from 'react';

const OrchidGallery = ({ orchids }) => {
  const [selectedOrchid, setSelectedOrchid] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {orchids.map((orchid) => (
          <div
            key={orchid.id}
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => setSelectedOrchid(orchid)}
          >
            <img
              src={orchid.image}
              alt={orchid.name}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <p className="mt-2 text-center font-serif text-primary dark:text-secondary">{orchid.name}</p>
          </div>
        ))}
      </div>
      {selectedOrchid && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-dark-bg p-6 rounded-lg max-w-3xl w-full">
            <img
              src={selectedOrchid.image}
              alt={selectedOrchid.name}
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg mb-4"
            />
            <h2 className="text-2xl font-serif font-bold mb-2 text-primary dark:text-secondary">{selectedOrchid.name}</h2>
            <p className="mb-4">Esta hermosa planta es parte de nuestra colección en Guayabo Abajo Vivero la Orquídea. Cada espécimen es cuidadosamente cultivado para asegurar su salud y belleza.</p>
            <button
              onClick={() => setSelectedOrchid(null)}
              className="bg-primary dark:bg-secondary text-white px-4 py-2 rounded-md hover:opacity-80 transition-opacity"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrchidGallery;