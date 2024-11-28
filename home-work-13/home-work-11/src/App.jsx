import Sidebar from "./components/sidebar/sidebar";
import MainContent from "./components/mainContent/mainContent"; 
import SidebarRight from "./components/sidebar-right/sidebar-right"; 
function App() {
  return (
    <div className="container">
      <Sidebar />
      <MainContent />
      <SidebarRight />
    </div>
  );
}

export default App;
