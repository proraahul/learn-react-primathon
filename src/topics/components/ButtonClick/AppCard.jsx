import AppButton from "./ButtonClick/AppButton";

const AppCard = (props) => {

  const onButtonClick = () => {
    console.log('button clicked from card component');
    if(props.onClick){
      props.onClick();
    }
  }

  return (
    <div className='border rounded  m-1 p-3'>
      <img src='https://picsum.photos/300/200' alt='Card Image' />
      <h2>This is card title</h2>
      <p>This is card description</p>
      <AppButton title={'Click Me!'} onClick={onButtonClick} />
    </div>
  );
};
export default AppCard;
