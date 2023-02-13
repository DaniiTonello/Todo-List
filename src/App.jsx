import { useState } from 'react';
import TaskList from './components/TaskList/TaskList';
import { AnimatePresence, motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';

const TASKS_LISTS = [
  {
    title: 'Trip to Paris',
    color: 'bg-pink-300',
    tasks: [
      {
        title: 'Passport check',
        completed: true,
      },
      {
        title: 'Hotel reservation',
        completed: false,
      },
    ],
  },
  {
    title: 'My Tasks',
    color: 'bg-blue-200',
    tasks: [
      {
        title: 'Buy milk',
        completed: false,
      },
      {
        title: 'Plan weekend outing',
        completed: false,
      },
      {
        title: 'Publishing Friday blog post',
        completed: true,
      },
      {
        title: 'Run 3 miles',
        completed: false,
      },
      {
        title: 'Wash clothes',
        completed: true,
      },
    ],
  },
  {
    title: 'Work',
    color: 'bg-yellow-300',
    tasks: [
      {
        title: 'Meeting at 9am',
        completed: false,
      },
      {
        title: 'Update database',
        completed: true,
      },
    ],
  },
  {
    title: 'House',
    color: 'bg-yellow-300',
    tasks: [],
  },
];

function App() {
  const [selectedTaskList, setSelectedTaskList] = useState(null);
  const [emblaRef] = useEmblaCarousel();

  const closeTaskList = () => {
    setSelectedTaskList(null);
  };

  return (
    <main className="h-screen flex flex-col items-center py-5 bg-[url('src/assets/fondo1.jpg')] bg-cover">
      <div className="bg-slate-50 w-[450px] h-full-screen p-8 m-4">
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

        <div className={`flex-1 overflow-hidden`} ref={emblaRef}>
          <div className={`flex items-end gap-5 p-3 h-72`}>
            {TASKS_LISTS.map((taskList, i) => {
              return (
                <TaskList
                  key={taskList.title}
                  title={taskList.title}
                  color={taskList.color}
                  tasks={taskList.tasks}
                  className={`${
                    selectedTaskList !== null && selectedTaskList !== i
                      ? '!opacity-0'
                      : ''
                  }`}
                  id={`taskList-${i}`}
                  handleClick={() => setSelectedTaskList(i)}
                />
              );
            })}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedTaskList !== null && (
          <motion.div className="fixed w-[40%] h-[95%] z-20 p-2">
            <TaskList
              expanded
              handleClose={closeTaskList}
              id={`taskList-${selectedTaskList}`}
              title={TASKS_LISTS[selectedTaskList].title}
              color={TASKS_LISTS[selectedTaskList].color}
              tasks={TASKS_LISTS[selectedTaskList].tasks}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
