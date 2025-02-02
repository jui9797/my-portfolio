import { motion, AnimatePresence } from "framer-motion";
import  { useRef, useState, useEffect } from "react";

const BackgroundBeamsWithCollision = ({ children, className }) => {
  const containerRef = useRef(null);
  const parentRef = useRef(null);

  const beams = [
    { initialX: 10, translateX: 10, duration: 7, repeatDelay: 3, delay: 2 },
    { initialX: 600, translateX: 600, duration: 3, repeatDelay: 3, delay: 4 },
    { initialX: 100, translateX: 100, duration: 7, repeatDelay: 7, className: "h-6" },
    { initialX: 400, translateX: 400, duration: 5, repeatDelay: 14, delay: 4 },
    { initialX: 800, translateX: 800, duration: 11, repeatDelay: 2, className: "h-20" },
    { initialX: 1000, translateX: 1000, duration: 4, repeatDelay: 2, className: "h-12" },
    { initialX: 1200, translateX: 1200, duration: 6, repeatDelay: 4, delay: 2, className: "h-6" },
  ];

  return (
    <div ref={parentRef} className={` bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 relative flex items-center w-full justify-center overflow-hidden ${className}`}>
      {beams.map((beam, index) => (
        <CollisionMechanism key={index} beamOptions={beam} containerRef={containerRef} parentRef={parentRef} />
      ))}
      {children}
      <div
        ref={containerRef}
        className="absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none"
        style={{ boxShadow: "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05)" }}
      ></div>
    </div>
  );
};

const CollisionMechanism = ({ parentRef, containerRef, beamOptions = {} }) => {
  const beamRef = useRef(null);
  const [collision, setCollision] = useState({ detected: false, coordinates: null });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      if (beamRef.current && containerRef.current && parentRef.current && !cycleCollisionDetected) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          setCollision({ detected: true, coordinates: { x: beamRect.left - parentRect.left + beamRect.width / 2, y: beamRect.bottom - parentRect.top } });
          setCycleCollisionDetected(true);
        }
      }
    };
    
    const interval = setInterval(checkCollision, 50);
    return () => clearInterval(interval);
  }, [cycleCollisionDetected, containerRef]);

  useEffect(() => {
    if (collision.detected) {
      setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
      }, 2000);
      setTimeout(() => setBeamKey((prev) => prev + 1), 2000);
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        initial={{ translateY: "-200px", translateX: beamOptions.initialX || "0px", rotate: beamOptions.rotate || 0 }}
        animate={{ translateY: "1800px", translateX: beamOptions.translateX || "0px", rotate: beamOptions.rotate || 0 }}
        transition={{ duration: beamOptions.duration || 8, repeat: Infinity, ease: "linear", delay: beamOptions.delay || 0, repeatDelay: beamOptions.repeatDelay || 0 }}
        className={`absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent ${beamOptions.className}`} />
      <AnimatePresence>
        {collision.detected && collision.coordinates && <Explosion style={{ left: `${collision.coordinates.x}px`, top: `${collision.coordinates.y}px`, transform: "translate(-50%, -50%)" }} />}
      </AnimatePresence>
    </>
  );
};

const Explosion = ({ ...props }) => {
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div {...props} className="absolute z-50 h-2 w-2">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.5, ease: "easeOut" }} className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
      {spans.map((span) => (
        <motion.span key={span.id} initial={{ x: 0, y: 0, opacity: 1 }} animate={{ x: span.directionX, y: span.directionY, opacity: 0 }} transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }} className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500" />
      ))}
    </div>
  );
};

export { BackgroundBeamsWithCollision };
