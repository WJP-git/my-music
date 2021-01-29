import { SET_FULL_SCREEN, SET_MINI_PLAYER } from './mutations-type'

export default {
  setFullScreen (content, flag) {
    content.commit(SET_FULL_SCREEN, flag)
  },
  setMiniPlayer (content, flag) {
    content.commit(SET_MINI_PLAYER, flag)
  }
}
