import { Dispatch } from 'redux';
import { BankActionType } from '../action-types';
import { BankAction } from '../actions';

export const deposit = (amount: number) => {
  return (dispatch: Dispatch<BankAction>) => {
    dispatch({
      type: BankActionType.DEPOSIT,
      payload: amount,
    });
  };
};

export const withdraw = (amount: number) => {
  return (dispatch: Dispatch<BankAction>) => {
    dispatch({
      type: BankActionType.WITHDRAW,
      payload: amount,
    });
  };
};

export const bankrupt = () => {
  return (dispatch: Dispatch<BankAction>) => {
    dispatch({
      type: BankActionType.BANKRUPT,
    });
  };
};
