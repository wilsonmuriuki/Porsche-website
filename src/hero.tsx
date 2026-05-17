import "tailwindcss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,Stage,Center } from "@react-three/drei";
import { PorscheModel } from "./components/PorscheModel";

const Hero=()=>{


    return(    
      
    <section className=" relative min-h-screen flex justify-center bg-radial from-neutral-500 via-neutral-600 to-neutral-700 text-white px-8 md:px-16 overflow-hidden">
      
      <nav className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl bg-neutral-800/60 backdrop-blur-md border-x border-b border-white/10 rounded-b-2xl py-1 px-6 md:px-10 flex items-center justify-between z-20 shadow-xl">
        <div className="font-smooch text-3xl font-black tracking-widest uppercase">
          Porsche
        </div>
        <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest uppercase text-neutral-300">
          <a href="#models" className="hover:text-white transition-colors">Models</a>
          <a href="#heritage" className="hover:text-white transition-colors">Heritage</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
        </div>
        <div>
          <button className="px-5 py-1.5 text-xs font-mono tracking-wider uppercase border border-white/20 rounded-full hover:bg-white hover:text-neutral-950 transition-all duration-300 cursor-pointer">
            Configure
          </button>
        </div>
      </nav>
      
      <div className="absolute top-10 left-8 md:top-15 md:left-25 max-w-xl text-left z-10">
    <h2 className="font-smooch mask-b-from-neutral-500 text-6xl sm:text-7xl md:text-8xl  tracking-wide uppercase mb-4 drop-shadow-md leading-tight">
      Porsche 911
    </h2>
    <p className="font-smooch text-2xl sm:text-3xl font-light text-gray-200 max-w-xl mx-auto leading-relaxed">
      Experience the Thrill of the Porsche 911
    </p>


    </div>

    <div className="w-full max-w-4xl aspect-video z-0 mt-36 md:mt-12 cursor-grab active:cursor-grabbing">
      <Canvas camera={{position:[0,4,15],fov:45}}
      gl={{antialias:true}}
      >
        <ambientLight intensity={0.7}/>
        <spotLight position={[10,15,10]} angle={0.3} penumbra={1} intensity={1.5} castShadow/>
        <directionalLight position={[-5,5,-5]} intensity={0.5}/>
        <Stage environment="studio" intensity={0.5} /*shadows={{opacity:0.4, blur:2}}*/>
          <Center>
            <PorscheModel/>
          </Center>
        </Stage>
      <OrbitControls
      enableZoom={true}
      maxPolarAngle={Math.PI/2}
      minDistance={3}
      maxDistance={10}
      />

      </Canvas>

    </div>
    

    

</section>

    )

};

export default Hero
