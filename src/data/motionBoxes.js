const motionBoxes = [
    {
      initial: { opacity: 0, x: -100, y: -100 },
      animate: { opacity: 1, x: 0, y: 0 },
      className:
        "bg-gray-500 w-64 md:w-80 h-32 md:h-40 rounded-full rounded-es rounded-se",
      bgImage:
        "url(https://img.freepik.com/free-photo/electric-machines-switches-isolated-white-close_169016-4109.jpg?w=826&t=st=1686911415~exp=1686912015~hmac=528352b2264b0309f65a8ab797696912b8b2b61353c3826cded28b0791deb604)",
      bgPosition: "center",
      bgSize: "100%",
    },
    {
      initial: { opacity: 0, x: 100, y: -100 },
      animate: { opacity: 0.85, x: 0, y: 0 },
      className: "bg-red-700 w-32 md:w-40 h-32 md:h-40 rounded-full rounded-br",
    },
    {
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
      className: "bg-gray-950 w-32 md:w-40 h-32 md:h-40 rounded-full rounded-tl",
      bgImage:
        "url(https://img.freepik.com/free-photo/urban-traffic-with-cityscape_1359-324.jpg?w=900&t=st=1686912251~exp=1686912851~hmac=8aa594f5165cbd2abe01aeb633c324c0c85cc8ac0d70faa1433da060e91d60c7)",
      bgPosition: "center",
      bgRepeat: "no-repeat",
      bgSize: "150%",
    },
    {
      initial: { opacity: 0 },
      animate: { opacity: 0.85 },
      className: "bg-green-700 w-32 md:w-40 h-32 md:h-40",
    },
    {
      initial: { opacity: 0, x: 100 },
      animate: { opacity: 1, x: 0 },
      className: "bg-gray-200 w-32 md:w-40 h-32 md:h-40 rounded-bl-[10rem]",
      bgImage:
        "url(https://img.freepik.com/premium-photo/transformer-isolated-white-background-3d-model_324757-4523.jpg?w=826)",
      bgPosition: "center",
      bgSize: "150%",
      bgRepeat: "no-repeat",
    },
    {
      initial: { opacity: 0, x: -100, y: 100 },
      animate: { opacity: 0.85, x: 0, y: 0 },
      className: "bg-blue-700 w-32 md:w-40 h-32 md:h-40 rounded-full",
    },
    {
      initial: { opacity: 0, x: 100, y: 100 },
      animate: { opacity: 1, x: 0, y: 0 },
      className: "bg-gray-200 w-64 md:w-80 h-32 md:h-40 rounded-full rounded-bl",
      bgImage:
        "url(https://images.unsplash.com/photo-1565608438257-fac3c27beb36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=876&q=80)",
      bgPosition: "center",
      bgSize: "100%",
    },
  ];

  export default motionBoxes