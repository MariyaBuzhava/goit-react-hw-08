import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, Suspense, lazy } from "react";
import {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
} from "./redux/auth/selectors";
import { refreshUserAsync } from "./redux/auth/slice";
import Layout from "./components/Layout";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUserAsync());
  }, [dispatch]);

  if (isRefreshing) {
    return <LoadingSpinner />;
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route
          path="/"
          element={<Layout isLoggedIn={isLoggedIn} user={user} />}
        >
          <Route index element={<HomePage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
