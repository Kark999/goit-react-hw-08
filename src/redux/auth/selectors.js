export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectUser = (state) => state.auth.user;

export const selectToken = (state) => state.auth.token;

export const selectName = (state) => state.auth.user.name;

export const selectEmail = (state) => state.auth.user.email;

export const selectError = (state) => state.auth.error;

export const selectIsLoading = (state) => state.auth.loading;

export const selectIsRegistered = (state) => state.auth.isRegistered;

export const selectIsLogOut = (state) => state.auth.isLogout;
