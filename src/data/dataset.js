import pic1 from '../../public/asssets/course/front.jpg'
import pic2 from '../../public/asssets/course/back.png'
import pic3 from '../../public/asssets/course/full.png'
import pic4 from '../../public/asssets/course/mad.jpg'
import pic5 from '../../public/asssets/course/gam.jpg'
import pic6 from '../../public/asssets/course/3.png'
import pic7 from '../../public/asssets/course/ml.jpg'
import pic8 from '../../public/asssets/course/dl.jpg'
import pic9 from '../../public/asssets/course/npl.jpg'

import image1 from '../../public/asssets/az.jpg'
import image2 from '../../public/asssets/testi2.jpg'
import image3 from '../../public/asssets/test3.jpg'
const data = {
    webDevelopment: [
      {
        id: 1,
        name: "Frontend Development",
        description: "Learn how to create stunning user interfaces using HTML, CSS, and JavaScript.",
        likes: 800,
       
        image: pic1,
      },
      {
        id: 2,
        name: "Backend Development",
        description: "Master server-side development with Node.js, Express, and database integrations.",
        likes: 480,
      
        image: pic2,
      },
      {
        id: 3,
        name: "Full Stack Development",
        description: "Combine frontend and backend skills to become a complete web developer.",
        likes: 220,
        image: pic3,
      },
    ],
    softwareDevelopment: [
      {
        id: 4,
        name: "Mobile App Development",
        description: "Develop mobile applications for Android and iOS platforms using Flutter and React Native.",
        likes: 890,
        image: pic4,
      },
      {
        id: 5,
        name: "Game Development",
        description: "Learn to build immersive games using Unity and Unreal Engine.",
        likes: 1100,

        image: pic5,
      },
      {
        id: 6,
        name: "Desktop Application Development",
        description: "Create cross-platform desktop applications using frameworks like Electron.",
        likes: 740,
   
        image: pic6,
      },
    ],
    artificialIntelligence: [
      {
        id: 7,
        name: "Machine Learning",
        description: "Understand the fundamentals of machine learning and build predictive models.",
        likes: 1450,
        comments: 180,
        image: pic7,
      },
      {
        id: 8,
        name: "Deep Learning",
        description: "Dive deep into neural networks and build AI models using TensorFlow and PyTorch.",
        likes: 1320,
        comments: 160,
        image: pic8,
      },
      {
        id: 9,
        name: "Natural Language Processing",
        description: "Explore NLP techniques for text analysis, chatbot development, and more.",
        likes: 970,
        comments: 90,
        image: pic9,
      },
    ],
  };
  
  export default data;
  
export   const testimonials = [
    {
      id: 1,
      name: "Azhar Ali Sheeno",
      description:
        "This platform has completely transformed how I manage my projects. The intuitive interface and seamless integration have saved me hours every week. Highly recommended for teams of all sizes!",
      role: "Full Stack Developer",
      company: "Upwork",
      avatar: image1,
    },
    {
      id: 2,
      name: "James Lee",
      description:
        "I’ve tried countless tools, but none come close to this one. The support team is incredibly responsive, and the features are tailored to fit modern workflows. It’s a game-changer!",
      role: "Software Developer",
      company: "NextGen Apps",
      avatar: image2,
    },
    {
      id: 3,
      name: "Sofia Martinez",
      description:
        "As a freelancer, I need tools that keep me organized without a steep learning curve. This platform is exactly what I needed—simple, powerful, and reliable.",
      role: "Freelancer",
      company: "Self-Employed",
      avatar: image3
    },
    
  ];
  