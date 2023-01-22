import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import GroupedTeamMembers from './components/GroupedTeamMembers';
import Employees from './components/Employees'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Nav from './components/Nav'
import NotFound from './components/NotFound';
function App() {
  const [employees, setemployees] = useState(JSON.parse(localStorage.getItem('employeelist')) || [{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }]);
  const [selectedteam, setteam] = useState(JSON.parse(localStorage.getItem('selectedteam')) || 'TeamB');
  const handleteamselectionchange = (event) => {
    setteam(event.target.value);
  }
  const handleemployeecardclick = (event) => {
    const transformedemployees = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id) ? (employee.teamName === selectedteam) ? { ...employee, teamName: '' } : { ...employee, teamName: selectedteam } : employee);
    setemployees(transformedemployees);
  }
  useEffect(() => {
    localStorage.setItem('employeelist', JSON.stringify(employees));
  }, [employees])
  useEffect(() => {
    localStorage.setItem('selectedteam', JSON.stringify(selectedteam));
  })

  return (
    <div className="App">
      <Router>
      <Nav></Nav>
        <Header selectedteam={selectedteam} teammembercount={employees.filter((employee) => employee.teamName === selectedteam).length}></Header>
        <Routes>
          <Route path='/' element={<Employees employees={employees} selectedteam={selectedteam} handleemployeecardclick={handleemployeecardclick} handleteamselectionchange={handleteamselectionchange}></Employees>}>
          </Route>
          <Route path='/GroupedTeamMembers' element={<GroupedTeamMembers employees={employees} selectedteam={selectedteam} setteam={setteam}/>}>

          </Route>
          <Route path='*' element={<NotFound/>}>

</Route>
        </Routes>
        <Footer></Footer>

      </Router>
    </div>
  );
}

export default App;
