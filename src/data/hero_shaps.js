const imageUrls = [
    "https://img.freepik.com/free-photo/electric-machines-switches-isolated-white-close_169016-4109.jpg?w=826&t=st=1686911415~exp=1686912015~hmac=528352b2264b0309f65a8ab797696912b8b2b61353c3826cded28b0791deb604",
    "https://img.freepik.com/free-photo/urban-traffic-with-cityscape_1359-324.jpg?w=900&t=st=1686912251~exp=1686912851~hmac=8aa594f5165cbd2abe01aeb633c324c0c85cc8ac0d70faa1433da060e91d60c7",
    "https://img.freepik.com/premium-photo/transformer-isolated-white-background-3d-model_324757-4523.jpg?w=826",
    "https://img.freepik.com/free-photo/electric-cables-closeup_93675-129855.jpg?w=900&t=st=1686911899~exp=1686912499~hmac=8a6460420360cf6cd5e5d39bd2c6d86be671ae5fa3eee1b14f133500dc0a690c"
  ];
  
  const animationConfigurations = [
    { initial: { opacity: 0, x: -100, y: -100 }, animate: { opacity: 1, x: 0, y: 0 }, transition: { duration: 2, bounce: 0.4 } },
    { initial: { opacity: 0, x: 100, y: -100 }, animate: { opacity: 1, x: 0, y: 0 }, transition: { duration: 2 } },
    { initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 }, transition: { duration: 2 } },
    { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 4 } },
    { initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 }, transition: { duration: 2 } },
    { initial: { opacity: 0, x: -100, y: 100 }, animate: { opacity: 1, x: 0, y: 0 }, transition: { duration: 2 } },
    { initial: { opacity: 0, x: 100, y: 100 }, animate: { opacity: 1, x: 0, y: 0 }, transition: { duration: 2 } }
  ];
  
export {imageUrls, animationConfigurations};
  



  