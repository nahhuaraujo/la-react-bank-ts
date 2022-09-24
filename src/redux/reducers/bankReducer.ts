import { BankActionType } from '../action-types';
import { BankAction } from '../actions';

interface State {
  money: number;
}

const initialState = {
  money: 0,
};

export const bankReducer = (state: State = initialState, action: BankAction): State => {
  if (action.type === BankActionType.DEPOSIT) {
    return {
      money: state.money + action.payload,
    };
  }
  if (action.type === BankActionType.WITHDRAW) {
    return {
      money: state.money - action.payload,
    };
  }
  if (action.type === BankActionType.BANKRUPT) {
    return {
      money: 0,
    };
  }
  return state;
};
