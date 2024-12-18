type LoadingProps = {
  height?: string;
  width?: string;
  color?: string;
};

export const Loading: React.FC<LoadingProps> = ({
  width = '16px',
  height = '16px',
  color = 'white',
}) => (
  <span
    className='block animate-spin rounded-full border-[3px] border-current border-t-transparent'
    style={{ width: width, height: height, color: color }}
    role='status'
    aria-label='loading'
  />
);
