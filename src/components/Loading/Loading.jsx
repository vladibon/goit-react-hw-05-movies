import Loader from 'react-loader-spinner';
import s from './Loading.module.css';

const Loading = () => (
  <div className={s.overlay}>
    <Loader type='Oval' color='#00BFFF' height={120} width={120} />
  </div>
);

export default Loading;
