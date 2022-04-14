import classNames from 'classnames';
import { Position } from '../../utils/types/Position';
import { ChekboxProps } from './ChekboxType';

const useStyles = ({ className, disabled, position }: Partial<ChekboxProps>) => ({
  container: classNames('flex', className, {
    'flex-row-reverse': position === Position.RIGTH,
    'justify-end': position === Position.RIGTH,
  }),
  inputContainer: classNames('flex ', className),
  input: classNames('ounded h-4 w-4 border cursor-pointer bg-center bg-contain  text-indigo-600', {
    'focus:outline focus:outline-offset-2 focus:outline-primary-500 border-gray-300 checked:bg-primary-500 checked:text-white checked:border-primary-500':
      !disabled,
    'bg-primary-300 text-primary-600 border-gray-300 ': disabled,
  }),
  labelContainer: 'ml-3 text-sm flex-auto grow-0',
  label: 'font-medium text-gray-700',
  description: 'text-gray-500',
});

export default useStyles;

/**
 * 
 *   <>
      <div className="flex items-center h-5">
        <input
          id={id}
          type="checkbox"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          {...attrs}
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={id} className="font-medium text-gray-700">
          {label}
        </label>
        <p className="text-gray-500">{description}</p>
      </div>
    </>
  );
 * 
 */
