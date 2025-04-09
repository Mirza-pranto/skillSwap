import Notes from './Notes';
import AddNote from './AddNote';
const Home = () => {
  return (
    <div>
      
      <AddNote />
      <Notes />
    </div> // ✅ This closing div was missing!
  );
};

export default Home;
