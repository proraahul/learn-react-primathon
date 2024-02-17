const AppButton = (props) => {

  // console.log(props);
  const onClick = () => {
      console.log('button click from button component');

      if(props.onClick){
        props.onClick();
      }
  }

  return (
    <button className='px-4 py-2 border rounded bg-green-500 text-white hover:bg-green-600' onClick={onClick}>
      {props.title}
    </button>
  );
};

export default AppButton;
