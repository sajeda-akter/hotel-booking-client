

import { useSpring, animated } from 'react-spring';

const TextAnimation = () => {
    const props = useSpring({
        from: { transform: 'translateX(25%)', color: 'orange',fontFamily: 'Arial, sans-serif'},
        to: { transform: 'translateX(50%)', color: 'purple', fontFamily: 'Times New Roman, serif'  },
        loop: { reverse: true },
        config: { duration: 5000 },
       
      });

   

      return <animated.div style={props} className="lg:text-5xl text-2xl text-bold my-12">COMFORT HOTEL</animated.div>;

};

export default TextAnimation;