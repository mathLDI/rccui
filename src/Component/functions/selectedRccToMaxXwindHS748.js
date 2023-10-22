const SelectedRccToMaxXwindHS748 = ({FinalRccToUse2p0Props}) => {
    if (FinalRccToUse2p0Props === 6) {
      return "30 kts";
    } else if (FinalRccToUse2p0Props === 5) {
      return '30 kts';
    } else if (FinalRccToUse2p0Props === 4) {
      return '25 kts';
    } else if (FinalRccToUse2p0Props === 3) {
      return '20 kts';
    } else if (FinalRccToUse2p0Props === 2) {
      return '15 kts';
    } else if (FinalRccToUse2p0Props === 1) {
      return '10 kts';
    } else if (FinalRccToUse2p0Props === 0) {
      return 'NO GO';
    } else {
      return '';
    }
  }
  
  export default SelectedRccToMaxXwindHS748