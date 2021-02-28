import { fetch } from "./csrf";
import { setwatchlistId, setportfolioId } from "./loading";
import { logoutWatchlist } from "./watchlist";
import { logoutPortfolio } from "./portfolio";

const SET_USER = "session/setUser";
const REMOVE_USER = "session/removeUser";

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await fetch("/api/session", {
    method: "POST",
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  dispatch(setUser(response.data.user));
  return response;
};

export const restoreUser = () => async (dispatch) => {
  const res = await fetch("/api/session");
  dispatch(setUser(res.data.user));
  return res;
};

export const signup = (formData) => async (dispatch) => {
  const { username, email, password } = formData;
  const response = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const createWatchlistRes = await fetch("/api/watchlists", {
    method: "POST",
    body: JSON.stringify({
      userId: response.data.user.id,
      name: `${username}'s watchlists`,
    }),
  });
  const createPortfolioRes = await fetch("/api/portfolios", {
    method: "POST",
    body: JSON.stringify({
      userId: response.data.user.id,
      name: `${username}'s portfolio`,
    }),
  });
  dispatch(setUser(response.data.user));
  dispatch(setwatchlistId(createWatchlistRes.data.watchlist.id));
  dispatch(setportfolioId(createPortfolioRes.data.portfolio.id));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await fetch("/api/session", {
    method: "DELETE",
  });
  dispatch(removeUser());
  dispatch(logoutWatchlist());
  dispatch(logoutPortfolio());
  return response;
};
const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case SET_USER:
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
