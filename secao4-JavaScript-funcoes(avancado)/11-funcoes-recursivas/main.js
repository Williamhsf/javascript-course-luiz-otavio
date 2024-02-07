function recursiva(max) {
  console.log(max);
  if (max >= 1000) return; // vai parar aqui

  max++;
  recursiva(max);
}


recursiva(0);