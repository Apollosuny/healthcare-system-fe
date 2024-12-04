import Sidebar from '../sidebar';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex'>
      <div className='h-screen w-24'>
        <Sidebar />
      </div>
      <div className='h-[200vh] ml-24 bg-[#f5f5fd]'>{children}</div>
    </div>
  );
};

export default Layout;
