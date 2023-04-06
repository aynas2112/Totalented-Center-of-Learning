import React from 'react'
import {Link} from 'react-router-dom'

function Cards() {
  return (
    <div className='flex items-center justify-center min-h-screen container mx-auto'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className='card'>
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1601397922721-4326ae07bbc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="mental-math" />
            </div>
            <h5 className='text-2xl md:text-3xl font-medium mt-3x'>Mental Math</h5>
            <p className='text-slate-500 text-lg-mt-3'>
            Mental math refers to performing mathematical calculations in one's mind, without the use of external aids such as calculators or paper and pencil. Mental math can involve a variety of mathematical operations, including addition, subtraction, multiplication, division, and more complex operations such as exponents and logarithms.
            Mental math is often used in everyday life, such as when calculating a tip or dividing a bill among friends at a restaurant. It is also an important skill in academic settings, particularly in math and science courses. Developing strong mental math skills can improve one's overall numerical fluency and problem-solving abilities.
            {/* <Link to="/ment" className=''></Link> */}
            <br />
            <br />
            <div className="text-center">
                <a href="#" className='bg-blue-400 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out px-20'>Explore</a>
              </div>
            </p>
          </div>
        </div>
        <div className='card'>
          <div className="p-5 flex flex-col">
            <div className="rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="mental-math" />
            </div>
            <h5 className='text-2xl md:text-3xl font-medium mt-3x'>Pizza</h5>
            <p className='text-slate-500 text-lg-mt-3'>
            Pizza is a popular dish that originated in Italy but has become a staple in many parts of the world. It typically consists of a round, flattened crust topped with tomato sauce, cheese, and a variety of toppings, such as meats, vegetables, and herbs.
            Pizza can be enjoyed in many different ways, such as with a thin or thick crust, as a personal size or a large family size, and with a variety of toppings to suit individual preferences. It is a convenient food that can be ordered for delivery or made at home using pre-made crusts or homemade dough.
            Pizza has also become a cultural icon, representing comfort food and social gatherings.It is often associated with parties, movie nights, and sports events, makin


            {/* <Link to="/ment" className=''></Link> */}
            <br />
            <br />
            <div className="text-center">
                <a href="#" className='bg-blue-400 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out px-20'>Explore</a>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards