
const CheckLog = ({children}) => {
  const showContent = () => {
    const isLogin = true;
    if (!isLogin) {
      window.location.href='/login';
      return null;
    }
    return children;
  };

  return showContent();
};

export default CheckLog;
