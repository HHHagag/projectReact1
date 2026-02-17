import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


function Navbarcomponents() {
  return (
    <Navbar expand="lg" className="bg-custom navbar-dark">
  <Container className="p-3 flex justify-between items-center">

   
    <div className="flex flex-col items-start">
      <Navbar.Brand href="#home">عدسة</Navbar.Brand>
      <p className="text-orange-400 m-0 text-sm">
        عالم التصوير الفوتوغرافي
      </p>
    </div>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">
    
      <Nav className="flex justify-center items-center mx-auto">
        <div className="flex gap-3 bg-custom buttonRounded px-4 py-2">
          <NavLink 
            to="/"
            className=' text-white p-2' >
            الرئيسيه
          </NavLink>

          <NavLink to="/blog" className="text-white p-2">
            المدونه
          </NavLink>

          <NavLink to="/about" className="text-white p-2 ">
            من نحن
          </NavLink>
        </div>
      </Nav>


      <div className="flex items-center gap-2">
        <div className="text-[24px] h-10 w-10 
                        flex justify-center items-center text-gray-400
                        transition-all duration-300 hover:text-[#F74F00] bg-custom rounded-xl">
          <FaSearch />
        </div>

        <button className="bg-[#F74F00] text-white border-0 py-3 px-6 text-sm buttonRounded">
          ابدأ القراءة
        </button>
      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
}

export default Navbarcomponents;