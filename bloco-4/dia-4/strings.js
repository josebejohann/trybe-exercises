function handleStrings(word, ending) {
  if (word > ending) {
    let final = '';

    for (i = word.length - ending.length; i < word.length; i++) {
      final += word[i];
    }

    if (final === ending) {
      console.log(true);
    } else {
      console.log(false);
    }
  } else {
    return 'Your string ending must be shorter than your string word.';
  }
}

handleStrings('trybe', 'be');
