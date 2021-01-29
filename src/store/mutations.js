import { SET_FULL_SCREEN, SET_MINI_PLAYER } from './mutations-type'
export default {
  [SET_FULL_SCREEN] (state, flag) {
    state.isFullScreen = flag
  },
  [SET_MINI_PLAYER] (state, flag) {
    state.isShowMiniPlayer = flag
  }
}
