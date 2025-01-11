// import { useParams } from "react-router-dom";
// import { projects } from "../data";

// const ProjectDetails = () => {
//   const { slug } = useParams();
//   const project = projects.find((p) => p.slug === slug);

//   if (!project) {
//     return <h2>Project not found</h2>;
//   }

//   return (
//     <div className="project-details">
//       <h1>{project.title}</h1>
//       <img src={project.img} alt={project.title} />
//       <p>{project.text}</p>
//       <a href={project.url} target="_blank" rel="noopener noreferrer">
//         Visit Live Project
//       </a>
//       <a href={project.github} target="_blank" rel="noopener noreferrer">
//         GitHub Repository
//       </a>
//     </div>
//   );
// };

// export default ProjectDetails;


import { useParams } from "react-router-dom";
import { projects } from "../data";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  console.log(project, "this is project")

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="project-details p-8">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <div className="mb-6">
        {/* <img
          src={project.img}
          alt={project.title}
          className="w-full rounded-lg shadow-lg"
        /> */}
      </div>
      <p className="text-lg text-gray-700 mb-6">{project.text}</p>
      {/* <div className="grid grid-cols-3 gap-4 mb-6">
        {project.extraImages &&
          project.extraImages.map((image, index) => (
            <img
              key={index}
              src={image}
            //  alt={"hello"}
              alt={`Extra image ${index + 1} for ${project.title}`}
              className="rounded-lg shadow-md"
            />
          ))}
      </div> */}
      <div className="grid grid-cols-3 gap-4 mb-6">
  {project.extraImages.map((image, index) => (
    <img
      key={index}
      src={image} // Correctly points to public folder images
      alt={`${project.title} extra ${index + 1}`}
      className="rounded-lg shadow-md"
    />
  ))}
</div>

      {/* <div className="flex gap-4">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          Visit Live Project
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition"
        >
          GitHub Repository
        </a>
      </div> */}
    </div>
  );
};

export default ProjectDetails;

// import { useParams } from "react-router-dom";
// import { projects } from "../data";

// const ProjectDetails = () => {
//   const { slug } = useParams();
//   const project = projects.find((p) => p.slug === slug);

//   if (!project) {
//     return <h2>Project not found</h2>;
//   }

//   return (
//     <div className="project-details p-8">
//       <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
//       <p className="text-lg text-gray-700 mb-6">{project.text}</p>

//       {/* Render Main Image */}
//       <div className="mb-6">
//         <img
//           src={project.img}
//           alt={`${project.title} main`}
//           className="w-full rounded-lg shadow-lg"
//         />
//       </div>

//       {/* Render Extra Images */}
//       <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
//       <div className="grid grid-cols-3 gap-4 mb-6">
//         {project.extraImages.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`${project.title} extra ${index + 1}`}
//             className="rounded-lg shadow-md"
//           />
//         ))}
//       </div>

//       {/* Links */}
//       <div className="flex gap-4">
//         <a
//           href={project.url}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
//         >
//           Visit Live Project
//         </a>
//         <a
//           href={project.github}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition"
//         >
//           GitHub Repository
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;
