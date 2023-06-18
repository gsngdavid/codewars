function likeOrDislike(buttons) {
    let state = 'Nothing';
    
    for(let i=0; i < buttons.length; i++) {
      state = state === buttons[i] ? 'Nothing' : buttons[i];
    }
    return state;
  }