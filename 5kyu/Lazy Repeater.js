const makeLooper = (s,i=0) => () => s[i++ % s.length];