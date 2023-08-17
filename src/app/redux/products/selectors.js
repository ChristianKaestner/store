export const selectProducts = state => state.products.items;
export const selectPromotedProducts = state => state.products.promoted;
export const selectCart = state => state.products.cart;
export const selectFavorite = state => state.products.favorite;
export const selectIsError = state => state.products.isError;
export const selectIsLoading = state => state.products.isLoading;
