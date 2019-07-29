export default function ExpectHelpers () {
  function actionToHaveBeenCalledWith (action, payload) {
    expect(action).toHaveBeenCalledWith(expect.any(Object), payload, undefined)
  }

  return {
    actionToHaveBeenCalledWith
  }
}
