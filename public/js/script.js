// Drum Arrays
let kicks = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
let snares = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
let hiHats = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
let rideCymbals = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];

const getDrumArrayByName = (drumArrayName) => {
  switch(drumArrayName) {
    case 'kicks':
      return kicks;
    case 'snares':
      return snares;
    case 'hiHats':
      return hiHats;
    case 'rideCymbals':
      return rideCymbals;
  }
};

const toggleDrum = (drumArrayName, indexNum) => {
  /* We want this function to flipp the correct array index. 
  In order to do this, we need to be able to select the correct drum name, thats why we
  used the switch statment above.  
  
  This is also how we would toggle a single drum style in an array and not all four. */

const drums = getDrumArrayByName(drumArrayName);
/* We used the if statement below to avoid any invalid values according to our
node test requirements. */
  if (!drums || indexNum > 15 || indexNum < 0) {
    return;
  }
  /* Calling this drums instance, allows is to flip an index in one of our arrays to the opposite value. */
  drums[indexNum] = !drums[indexNum];
};

const clear = (drumArrayName) => {
  const drums = getDrumArrayByName(drumArrayName);
  if (drums) {
    drums.fill(false);
  }
};


const invert = (drumArrayName) => {
  const drums = getDrumArrayByName(drumArrayName);
  if (!drums) {
    return;
  }
  for (let i = 0; i < drums.length; i++) {
    drums[i] = !drums[i];
  }
}