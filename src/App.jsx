import Header from "./components/Header/Header";
import Notes from "./components/Notes/Notes";
import NotesProvaider from "./Store/NotesProvaider";
import Modal from "./components/Modal/Modal";
import Add from "./components/Add/Add";
const App = () => {
  return (
    <NotesProvaider>
      <Header />
      <Notes />
      <Modal/>
      <Add/>
    </NotesProvaider>
  );
};

export default App;
