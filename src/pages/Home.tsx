import Navbar from "../Navbar";

const Home = () => {

  return (
    <div className=" h-full  flex-col
    items-center justify-center p-4">
       <Navbar />
      {/* BOX */}
      <div className=" h-full shadow-2xl rounded-md overflow-hidden flex flex-col 
      md:flex-row  md:w-full justify-center">

        {/* FORM CONTAINER */}
        <div className=" p-3 flex flex-col   gap-8 ">
          Home page
        <ol>
          <li>some info</li>
          <li>some info</li>
          <li>some info</li>
          <li>some info</li>
          <li>some info</li>
          <li>some info</li>
          <li>some info</li>
          <li>some info</li>
        </ol>
        </div>
      </div>
    </div>
  );
};

export default Home;