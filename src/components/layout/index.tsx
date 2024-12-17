import Header from '../header';
import Sidebar from '../sidebar';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex'>
      <div className='h-screen w-24 fixed top-0 left-0'>
        <Sidebar />
      </div>
      <div className='bg-[#f5f5fd] w-full p-10 ml-24'>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
