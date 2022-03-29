import SpinnerType from './SpinnerType';
import useStyles from './styles';

const Spinner = (props: Partial<SpinnerType>) => {
  const styles = useStyles(props);

  return (
    <svg className={styles.spinner} width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 0.58679C8 0.262715 7.73693 -0.00224014 7.41372 0.021507C6.03792 0.122593 4.70798 0.578136 3.55544 1.34824C2.23984 2.22729 1.21446 3.47672 0.608964 4.93853C0.00346269 6.40034 -0.154964 8.00887 0.153718 9.56072C0.4624 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.4219 11.292 15.8774 9.96208 15.9785 8.58627C16.0022 8.26307 15.7373 8 15.4132 8V8C15.0891 8 14.829 8.26321 14.8012 8.58609C14.7027 9.72951 14.3171 10.8331 13.676 11.7926C12.9259 12.9152 11.8597 13.7901 10.6124 14.3068C9.36499 14.8235 7.99243 14.9587 6.66823 14.6953C5.34404 14.4319 4.12768 13.7817 3.17299 12.827C2.2183 11.8723 1.56815 10.656 1.30475 9.33177C1.04135 8.00757 1.17654 6.63501 1.69321 5.38764C2.20989 4.14028 3.08485 3.07414 4.20744 2.32404C5.16693 1.68293 6.27049 1.29731 7.41391 1.19878C7.73679 1.17096 8 0.910866 8 0.58679V0.58679Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Spinner;
