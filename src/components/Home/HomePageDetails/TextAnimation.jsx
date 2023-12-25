

import { useSpring, animated } from 'react-spring';

const TextAnimation = () => {
    const props = useSpring({
        from: { transform: 'translateX(-0%)', color: 'orange',fontFamily: 'Arial, sans-serif'},
        to: { transform: 'translateX(100%)', color: 'purple', fontFamily: 'Times New Roman, serif'  },
        loop: { reverse: true },
        config: { duration: 6000 },
       
      });

   

      return <animated.div style={props} className="text-5xl text-bold my-12">COMFORT HOTEL</animated.div>;

};

export default TextAnimation;