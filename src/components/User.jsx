import { useAuth } from "./AuthProvider";

const User = () => {
  const { authState, dispatch } = useAuth();

  const handleLogin = () => {
    dispatch({ type: "LOGIN", payload: { username: "User" } });
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  if (authState.isAuthenticated) {
    return (
      <div>
        <p>Ласкаво просимо, {authState.user.username}!</p>
        <button onClick={handleLogout}>Вийти</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>Ви не авторизовані.</p>
        <button onClick={handleLogin}>Увійти</button>
      </div>
    );
  }
};

export default User;
