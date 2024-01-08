import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";

const About = () => {
  return (
    <div className="p-5">
      <h1 className="text-center font-bold text-2xl mb-5">About</h1>
      <div className="border rounded-lg p-2">
        <img className="rounded-md" src={about1} alt="" />
        <p className="text-justify my-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nulla
          animi consequatur odit. Vero magnam ipsa ex, quos ipsum assumenda?
        </p>
        <img className="rounded-md" src={about2} alt="" />
        <p className="text-justify my-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nulla
          animi consequatur odit. Vero magnam ipsa ex, quos ipsum assumenda?
        </p>
        <p className="text-justify my-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nulla
          animi consequatur odit. Vero magnam ipsa ex, quos ipsum assumenda?
        </p>
      </div>
    </div>
  );
};

export default About;
