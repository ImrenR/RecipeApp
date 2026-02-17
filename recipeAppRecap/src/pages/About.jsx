import img from '../assets/imren.jpg'


const About = () => {
  return (
  <div className="max-w-sm m-auto mt-10  ">
    
<div className='flex flex-col sm:flex-row items-center gap-4'>
  <h2 className="text-blue-400 ">Software Developer</h2>
  <h2 className="text-blue-400 ">Imren Rahbay</h2>
<img src={img} 
className='w-20 rounded-full object-cover text-center' />

</div>
 <p className='text-gray-400 mt-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veritatis, pariatur provident corporis porro itaque sit asperiores omnis magni ex. Est doloremque, ipsam sed quasi ipsa repellendus saepe suscipit mollitia?</p>
 <p className='text-gray-400 mt-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veritatis, pariatur provident corporis porro itaque sit asperiores omnis magni ex. Est doloremque, ipsam sed quasi ipsa repellendus saepe suscipit mollitia?</p>
 <p className='text-gray-400 mt-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veritatis, pariatur provident corporis porro itaque sit asperiores omnis magni ex. Est doloremque, ipsam sed quasi ipsa repellendus saepe suscipit mollitia?</p>
 <p className='text-gray-400 mt-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veritatis, pariatur provident corporis porro itaque sit asperiores omnis magni ex. Est doloremque, ipsam sed quasi ipsa repellendus saepe suscipit mollitia?</p>


  </div>
  )
}

export default About