import React, { useState } from "react";
import projects from "../data/project.json";
import ImageCard from "../../components/ImageCard";
import { Container, Row, Col } from "react-bootstrap";
import FilterationBtn from "../components/FilterationBtn";

export default function Blog() {
  console.log(projects);

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState('');


const filterproject = projects.posts
  .filter((project) => {
    return filter === "all" || project.category === filter;
  })
  .filter((project) => {
    return project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  
 const categories = [
  "all",
  ...new Set(
    projects.posts.map((project) => project.category)
  ),
];

  console.log(categories);

  return (
    <div className="w-full min-h-screen flex flex-col items-center text-center pt-24 bg-[#0D0C0A] text-white">

      <div className="inline-flex items-center gap-2 mb-16 
                      bg-[#25160B] backdrop-blur-[30px] borderAbout buttonRounded p-2">
        <span className="text-sm font-medium px-2 text-[#ff7b1d]">
          مدونتنا
        </span>
      </div>

      <h1 className="text-5xl font-bold mb-4">
        استكشف <span className="text-[#FAA21E]">مقالاتنا</span>
      </h1>

      <p className="text-xl text-neutral-400 mb-6 max-w-3xl mx-auto">
        اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
      </p>
<Container>
    <div className="d-flex justify-content-between align-items-center my-3">
<input 
  type="text"
  className="form-control w-25 mx-auto my-3 text-white"  style={{ backgroundColor: '#161616' }}
  placeholder="ابحث فى المقالات" 
  
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>

<FilterationBtn
  filter={filter}
  categories={categories}
  setFilter={setFilter}
  count={filterproject.length}
/>
</div>
<p className="d-flex justify-content-start align-items-center w-100 text-sm text-neutral-400">
  عدد  <span className="text-white"> {filterproject.length}</span> المقالات     
    
</p>

</Container>

      <Container className="py-5">
        <Row className="g-5">
          {filterproject.map((project) => {
            return (
              <Col md={4} key={project.id}>




                <ImageCard project={project} />

                

              </Col>
            
            );
          })}
        </Row>
         
      </Container>

    </div>
  );
}
