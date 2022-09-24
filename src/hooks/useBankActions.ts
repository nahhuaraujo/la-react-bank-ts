import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bankActionCreators from '../redux/action-creators/bankActionCreators';

export const useBankActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(bankActionCreators, dispatch);
};
