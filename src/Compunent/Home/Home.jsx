import Food from "../Food/Food";

const Home = () => {
    return (
        <div>
  <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/M7pHhfZ/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai.jpg)'}}>
  <div className="hero-overlay "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">Best food waiting for your belly
</h1>
      <button className="btn bg-orange-600 border-0 rounded-badge text-white">Order Now</button>
    </div>
  </div>
</div>

           <Food />

        </div>
    );
};

export default Home;