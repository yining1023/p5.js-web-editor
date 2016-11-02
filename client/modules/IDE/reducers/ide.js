import * as ActionTypes from '../../../constants';

const initialState = {
  isPlaying: false,
  isTextOutputPlaying: false,
  consoleEvent: [],
  modalIsVisible: false,
  sidebarIsExpanded: false,
  consoleIsExpanded: false,
  preferencesIsVisible: false,
  projectOptionsVisible: false,
  newFolderModalVisible: false,
  shareModalVisible: false,
  editorOptionsVisible: false,
  keyboardShortcutVisible: false,
  unsavedChanges: false,
  projectSavedTime: '',
  infiniteLoop: false,
  previewIsRefreshing: false,
  infiniteLoopMessage: ''
};

const ide = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.START_SKETCH:
      return Object.assign({}, state, { isPlaying: true });
    case ActionTypes.STOP_SKETCH:
      return Object.assign({}, state, { isPlaying: false });
    case ActionTypes.START_TEXT_OUTPUT:
      return Object.assign({}, state, { isTextOutputPlaying: true });
    case ActionTypes.STOP_TEXT_OUTPUT:
      return Object.assign({}, state, { isTextOutputPlaying: false });
    case ActionTypes.CONSOLE_EVENT:
      return Object.assign({}, state, { consoleEvent: action.event });
    case ActionTypes.SHOW_MODAL:
      return Object.assign({}, state, { modalIsVisible: true });
    case ActionTypes.HIDE_MODAL:
      return Object.assign({}, state, { modalIsVisible: false });
    case ActionTypes.COLLAPSE_SIDEBAR:
      return Object.assign({}, state, { sidebarIsExpanded: false });
    case ActionTypes.EXPAND_SIDEBAR:
      return Object.assign({}, state, { sidebarIsExpanded: true });
    case ActionTypes.COLLAPSE_CONSOLE:
      return Object.assign({}, state, { consoleIsExpanded: false });
    case ActionTypes.EXPAND_CONSOLE:
      return Object.assign({}, state, { consoleIsExpanded: true });
    case ActionTypes.OPEN_PREFERENCES:
      return Object.assign({}, state, { preferencesIsVisible: true });
    case ActionTypes.CLOSE_PREFERENCES:
      return Object.assign({}, state, { preferencesIsVisible: false });
    case ActionTypes.RESET_PROJECT:
      return initialState;
    case ActionTypes.OPEN_PROJECT_OPTIONS:
      return Object.assign({}, state, { projectOptionsVisible: true });
    case ActionTypes.CLOSE_PROJECT_OPTIONS:
      return Object.assign({}, state, { projectOptionsVisible: false });
    case ActionTypes.SHOW_NEW_FOLDER_MODAL:
      return Object.assign({}, state, { newFolderModalVisible: true });
    case ActionTypes.CLOSE_NEW_FOLDER_MODAL:
      return Object.assign({}, state, { newFolderModalVisible: false });
    case ActionTypes.SHOW_SHARE_MODAL:
      return Object.assign({}, state, { shareModalVisible: true });
    case ActionTypes.CLOSE_SHARE_MODAL:
      return Object.assign({}, state, { shareModalVisible: false });
    case ActionTypes.SHOW_EDITOR_OPTIONS:
      return Object.assign({}, state, { editorOptionsVisible: true });
    case ActionTypes.CLOSE_EDITOR_OPTIONS:
      return Object.assign({}, state, { editorOptionsVisible: false });
    case ActionTypes.SHOW_KEYBOARD_SHORTCUT_MODAL:
      return Object.assign({}, state, { keyboardShortcutVisible: true });
    case ActionTypes.CLOSE_KEYBOARD_SHORTCUT_MODAL:
      return Object.assign({}, state, { keyboardShortcutVisible: false });
    case ActionTypes.SET_UNSAVED_CHANGES:
      return Object.assign({}, state, { unsavedChanges: action.value });
    case ActionTypes.SET_PROJECT_SAVED_TIME:
      return Object.assign({}, state, { projectSavedTime: action.value });
    case ActionTypes.RESET_PROJECT_SAVED_TIME:
      return Object.assign({}, state, { projectSavedTime: '' });
    case ActionTypes.DETECT_INFINITE_LOOPS:
      return Object.assign({}, state, { infiniteLoop: true, infiniteLoopMessage: action.message });
    case ActionTypes.RESET_INFINITE_LOOPS:
      return Object.assign({}, state, { infiniteLoop: false, infiniteLoopMessage: '' });
    case ActionTypes.START_SKETCH_REFRESH:
      return Object.assign({}, state, { previewIsRefreshing: true });
    case ActionTypes.END_SKETCH_REFRESH:
      return Object.assign({}, state, { previewIsRefreshing: false });
    default:
      return state;
  }
};

export default ide;
