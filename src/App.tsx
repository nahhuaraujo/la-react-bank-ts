import { useState } from 'react';
import { Store } from './redux/store';
import { useSelector } from 'react-redux';
import { useBankActions } from './hooks';
import * as S from './styled-components';

const App = () => {
  const [amount, setAmount] = useState<number>(0);
  const money = useSelector((store: Store) => store.bank.money);
  const { deposit, withdraw, bankrupt } = useBankActions();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value));
  };

  const resetAmount = () => {
    setAmount(0);
  };

  const depositHandler = () => {
    deposit(amount);
    resetAmount();
  };

  const withdrawHandler = () => {
    withdraw(amount);
    resetAmount();
  };

  const bankruptHandler = () => {
    bankrupt();
    resetAmount();
  };

  return (
    <S.App>
      <S.AppForm>
        <h1>Bank App</h1>
        <h1>{money}</h1>
        <input type='text' min={0} onChange={changeHandler} value={amount} autoFocus />
        <S.AppActions>
          <button onClick={depositHandler}>Deposit</button>
          <button onClick={withdrawHandler}>Withdraw</button>
          <button onClick={bankruptHandler}>Bankrupt</button>
        </S.AppActions>
      </S.AppForm>
    </S.App>
  );
};

export default App;
