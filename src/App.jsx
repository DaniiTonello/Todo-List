import { useState } from 'react';
import './App.css';
import useEmblaCarousel from 'embla-carousel-react';

function App() {
  const [count, setCount] = useState(0);

  const [emblaRef] = useEmblaCarousel();

  return (
    <main className="h-screen flex flex-col items-center py-5 bg-[url('src/assets/fondo1.jpg')] bg-cover">
      <div className="bg-slate-50 w-[500px] h-full p-12 m-4">
        <div className="text-center max-w-7xl w-full p-6">
          <h1 className="text-3xl mb-10">
            <span className="font-extrabold">Tasks</span>{' '}
            <span className="font-semibold text-gray-300">List</span>
          </h1>
          <div className="text-center">
            <button className="font-semibold border-2 rounded-md border-gray-200 px-3 py-1">
              +
            </button>
            <br />
            <span className="font-semibold text-gray-300">Add List</span>
          </div>
        </div>
        <div>soy un carrusel de notas</div>
      </div>
    </main>
  );
}

export default App;
