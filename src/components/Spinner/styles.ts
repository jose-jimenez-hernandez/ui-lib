import SpinnerType from './SpinnerType';

const useStyles = ({ className = 'mr-3', color = '#edeafd' }: Partial<SpinnerType>) => ({
  spinner: `animate-spin h-5 w-5 ${className} ${color != 'currentColor' ? `text-${color}` : color}`,
});

export default useStyles;
