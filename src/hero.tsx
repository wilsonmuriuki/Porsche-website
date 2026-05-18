import "tailwindcss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,Stage,Center } from "@react-three/drei";
import { PorscheModel } from "./components/PorscheModel";

const Hero=()=>{


    return(    
      
    <section className=" relative min-h-screen flex justify-center bg-radial from-neutral-500 via-neutral-600 to-neutral-700 text-white px-8 md:px-16 overflow-hidden">
        <div className="absolute bottom-6 left-6 flex items-center gap-4 ">
          <button className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20 ">
            Shop Accessories
          </button>
          <button className="group flex items-center gap-4 rounded-full bg-white/75 px-3 py-1 text-sm font-medium text-black transition hover:scale-105">
            <span>Book a Test Drive</span>
            <div className="flex h-7 w-10 items-center justify-center rounded-full bg-neutral-500 text-white z-10 transition group-hover:translate-x-0.5">
                    →
            </div>

          </button>

        </div>

      <div className="absolute rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/30 transition-all px-20 duration-100 top-10 right-8 md:top-30 md:right-25 text-right hover:text-white">
        <h3 className="text-3xl tracking-wide mb-4 mr-2 text-center text-white/95">Specs</h3>
        <div className="flex flex-col gap-3">
        <div className="bg-neutral-950/40 border border-white/5 rounded-2xl w-60 h-20 transition-all duration-300 hover:bg-neutral-950/50">
          <span className="text-[11px] block text-left ml-3 mt-2.5 font-medium tracking-wide text-neutral-400 ">
            Engine
          </span>
          <div className="flex justify-around items-baseline">
            <span className="text-xl font-bold tracking-tight text-white">3000 cc</span>
            <span className="text-xl font-bold tracking-tight text-white">4000 cc</span>
          </div>
        </div>
        <div className="bg-neutral-950/40 border border-white/5 rounded-2xl w-60 h-20 transition-all duration-300 hover:bg-neutral-950/50">
          <span className="text-[11px] block text-left ml-3 mt-2.5 font-medium tracking-wide text-neutral-400 mb-0.5">
            Power
          </span>
          <div className="flex justify-around items-baseline">
            <span className="text-xl font-bold tracking-tight text-white">394 hp</span>
            <span className="text-xl font-bold tracking-tight text-white">640 bhp</span>
          </div>
        </div>
          <div className="bg-neutral-950/40 border border-white/5 rounded-2xl w-60 h-20 flex justify-between items-center transition-all duration-300 hover:bg-neutral-950/50">
          {/* Left Side: Seating */}
          <div className="flex flex-col">
            <span className="text-[11px] block text-right ml-32 mt-1.8 font-medium tracking-wide text-neutral-400 mb-0.5">
              Seating Capacity
            </span>
            <span className="text-xl font-bold tracking-tight text-white">4 Passengers</span>
          </div>
        </div>
        <div className="flex flex-col mb-2 items-end">
            <span className="text-[11px] font-medium tracking-wide text-neutral-400 mb-0.5">
              Drive Type
            </span>
            <span className="text-xl font-bold tracking-tight text-white uppercase">
              RWD
            </span>
          </div>
        </div>
        </div>

      <nav className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl bg-neutral-800/60 backdrop-blur-md border-x border-b border-white/10 rounded-b-2xl py-1 px-6 md:px-10 flex items-center justify-between z-20 shadow-xl">
        <div className="font-porsche text-2xl font-stretch-ultra-condensed [-webkit-text-stroke:0.5px_white] inline-block scale-x-125 scale-y-75 origin-left   tracking-widest uppercase">
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

    <div className=" max-w-5xl w-125 h-110 *:aspect-video z-0 mt-36 md:mt-27 cursor-grab active:cursor-grabbing">
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

      autoRotate={true}
      autoRotateSpeed={1.2}
      />

      </Canvas>

    </div>
    

    

</section>

    )

};

export default Hero
