export const deletePost = (id) => {
  return {
    type: 'REMOVE_POST',
    payload: id
  }
}
