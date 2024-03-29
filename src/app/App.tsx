import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import './styles/index.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userActions } from 'entities/User';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  const className = classNames('app', {}, []);

  return (
    <div className={className}>
      <Navbar />
      <div className="contentWrapper">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
