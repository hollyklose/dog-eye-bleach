export const dogPics = (state = 1, action) => {
  switch (action.type) {
    case 'INCREMENT_DOG_PICS':
      return state + 1
      default:
        return state
  }
}
