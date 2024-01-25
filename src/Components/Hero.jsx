import HeroImage from "../assets/HeroImage.jpg";
const Hero = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content m flex-col lg:flex-row-reverse">
        <img src={HeroImage} className="max-w-md rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            Quality Cleaning <br />
            <span className="text-blue-700">for Your Home</span>
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="space-x-5">
            <button className="btn btn-primary">Book a Service</button>
            <button className="btn btn-ghost">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
