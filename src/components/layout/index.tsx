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
      <div className='h-[200vh] bg-[#f5f5fd] w-full'>{children}</div>
    </div>
  );
};

export default Layout;
