/**
 * @description redo menu
 * @author wangfupeng
 */

import { IButtonMenu, IDomEditor, t } from '@wangeditor-next/core'
import { CANCEL_FULL_SCREEN_SVG, FULL_SCREEN_SVG } from '../../../constants/icon-svg'

class FullScreen implements IButtonMenu {
  title = t('fullScreen.title')
  iconSvg = FULL_SCREEN_SVG
  tag = 'button'
  alwaysEnable = true

  getValue(editor: IDomEditor): string | boolean {
    return ''
  }

  isActive(editor: IDomEditor): boolean {
    return editor.isFullScreen
  }

  isDisabled(editor: IDomEditor): boolean {
    return false
  }

  getIcon(editor: IDomEditor): string {
    if (editor.isFullScreen) {
      return FULL_SCREEN_SVG
    } else {
      return CANCEL_FULL_SCREEN_SVG
    }
  }

  getTitle(editor: IDomEditor): string {
    if (editor.isFullScreen) {
      return t('fullScreen.title')
    } else {
      return t('fullScreen.cancelTitle')
    }
  }

  exec(editor: IDomEditor, value: string | boolean) {
    if (editor.isFullScreen) {
      editor.unFullScreen()
    } else {
      editor.fullScreen()
    }
  }
}

export default FullScreen
