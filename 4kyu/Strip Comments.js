function solution(input, markers) {
      markers = markers.map(el => el === '$' ? '\\$' : el);
      const commentRegex = new RegExp(`(?<=${markers.join('|')}).+`, 'gm');
      const markersRegex = new RegExp(`[${markers.join('')}]`, 'gm');
      return input.replace(commentRegex, '').replace(markersRegex, '').replace(/\s+$/gm, '');
  }