export const selectIsLoggedIn = (state) => state.auth?.isLoggedIn ?? false;
export const selectUser = (state) =>
  state.auth?.user ?? { name: null, email: null };
export const selectIsRefreshing = (state) => state.auth?.isRefreshing ?? false;
