const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer className='bg-[#1e1e50] text-white py-5 font-sans mix-h-screen  mt-10 '>
        <div className='flex justify-around flex-wrap '>
          <div className='m-3 min-w-[200px]'>
            <h4 className='border-b-2 border-[#777] pb-1'>Company</h4>
            <ul>
              <li className='my-1'>
                <a href='/' className='hover:underline'>
                  Home
                </a>
              </li>
              <li className='my-1'>
                <a href='/contact' className='hover:underline'>
                  Contact us
                </a>
              </li>
              <li className='my-1'>
                <a href='/about' className='hover:underline'>
                  About us
                </a>
              </li>
              <li className='my-1'>
                <a href='/get-started' className='hover:underline'>
                  Get started
                </a>
              </li>
            </ul>
          </div>
          <div className='m-3 min-w-[200px]'>
            <h4 className='border-b-2 border-[#777] pb-1'>Services</h4>
            <ul>
              <li className='my-1'>
                <a href='/services/app-design' className='hover:underline'>
                  App design
                </a>
              </li>
              <li className='my-1'>
                <a href='/services/web-design' className='hover:underline'>
                  Web design
                </a>
              </li>
              <li className='my-1'>
                <a href='/services/logo-design' className='hover:underline'>
                  Logo design
                </a>
              </li>
              <li className='my-1'>
                <a href='/services/banner-design' className='hover:underline'>
                  Banner design
                </a>
              </li>
            </ul>
          </div>
          <div className='m-3 min-w-[200px]'>
            <h4 className='border-b-2 border-[#777] pb-1'>Account</h4>
            <ul>
              <li className='my-1'>
                <a href='/profile' className='hover:underline'>
                  Profile
                </a>
              </li>
              <li className='my-1'>
                <a href='/my-account' className='hover:underline'>
                  My account
                </a>
              </li>
              <li className='my-1'>
                <a href='/preferences' className='hover:underline'>
                  Preferences
                </a>
              </li>
              <li className='my-1'>
                <a href='/purchase' className='hover:underline'>
                  Purchase
                </a>
              </li>
            </ul>
          </div>
          <div className='m-3 min-w-[200px]'>
            <h4 className='border-b-2 border-[#777] pb-1'>Courses</h4>
            <ul>
              <li className='my-1'>
                <a href='/courses/html-css' className='hover:underline'>
                  HTML & CSS
                </a>
              </li>
              <li className='my-1'>
                <a href='/courses/javascript' className='hover:underline'>
                  JavaScript
                </a>
              </li>
              <li className='my-1'>
                <a href='/courses/photography' className='hover:underline'>
                  Photography
                </a>
              </li>
              <li className='my-1'>
                <a href='/courses/photoshop' className='hover:underline'>
                  Photoshop
                </a>
              </li>
            </ul>
          </div>
          <div className='m-3 min-w-[200px]'>
            <h4 className='border-b-2 border-[#491a1a] pb-1'>Subscribe</h4>
            <form className='flex flex-col'>
              <input
                type='email'
                placeholder='Enter your email'
                className='p-1 mb-2 border-none rounded'
              />
              <button
                type='submit'
                className='p-1 border-none rounded bg-[#555] text-b cursor-pointer hover:bg-[#777]'
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className='flex justify-between items-center flex-wrap mt-5 border-t border-[#555] pt-2'>
          <div className='flex'>
            <a
              href='https://twitter.com'
              className='mx-2 text-2xl hover:text-[#777]'
            >
              <i className='fab fa-twitter' />
            </a>
            <a
              href='https://facebook.com'
              className='mx-2 text-2xl hover:text-[#282c70]'
            >
              <i className='fab fa-facebook' />
            </a>
            <a
              href='https://instagram.com'
              className='mx-2 text-2xl hover:text-[#777]'
            >
              <i className='fab fa-instagram' />
            </a>
            <a
              href='https://linkedin.com'
              className='mx-2 text-2xl hover:text-[#777]'
            >
              <i className='fab fa-linkedin' />
            </a>
            <a
              href='https://youtube.com'
              className='mx-2 text-2xl hover:text-[#777]'
            >
              <i className='fab fa-youtube' />
            </a>
          </div>
          <p className='my-2 mx-4'>
            &copy; {year} .SqurareHack All rights reserved
          </p>
          <p className='my-1 mx-4'>
            <a href='/privacy-policy' className='hover:underline'>
              Privacy policy
            </a>{' '}
            |{' '}
            <a href='/terms' className='hover:underline'>
              Terms & condition
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
