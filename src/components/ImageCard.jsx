import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ImageCard({ project }) {
  return (
    <Card
  className="h-100 border-0"
  style={{ backgroundColor: "#161616" }}
>

      <div className="relative">

       
        <div
          className="absolute top-3 right-3 z-10 
                     bg-[#261E1B] backdrop-blur-[30px] 
                     px-3 py-1 rounded-2xl"
        >
          <span className="text-sm font-medium text-white">
            {project.category}
          </span>
        </div>

        <Card.Img
          variant="top"
          src={project.image}
          className="w-100"
        />

      </div> 
       <Card.Text className="flex-grow-1 text-[#A1A1A1] d-flex justify-content-start px-4 pt-3">
          {project.readTime} . {project.date}
        </Card.Text>
      <Card.Body className="d-flex flex-column text-white">
        <Card.Title>{project.title}</Card.Title>

        <Card.Text className="flex-grow-1 text-[#A1A1A1]">
          {project.excerpt}
        </Card.Text>

    <hr />
    
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full border-2 border-gray-500 overflow-hidden group-hover:border-[#ff7b1d] transition-colors duration-300">
            <img 
              src={project.author.avatar} 
              alt={project.author.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-white font-medium">{project.author.name}</span>
            <span className="text-[#A1A1A1] text-sm">{project.author.role}</span>
          </div>
        </div>

      </Card.Body>
    </Card>
  );
}

export default ImageCard;
