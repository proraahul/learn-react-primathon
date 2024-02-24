import React from "react";
import AppButton from "./ButtonClick/AppButton";

const ComponentA = () => {

  return (
    <div>
      <h1>Hello Components A</h1>
      <h2>Welcome to components h2</h2>
    </div>
  );
};

const ComponentB = () => {
  return (
    <>
      <h1>Hello Components B</h1>
      <h2>Welcome to components h2</h2>
    </>
  );
};

const ComponentC = () => {
  return (
    <React.Fragment>
      <h1 className='text-3xl'>Hello Components C</h1>
      <h2 className='text-red-600'>Welcome to components h2</h2>
    </React.Fragment>
  );
};

const ComponentsDriver = () => {

  const handleClick = () => {
    console.log('click from index component');
  }

  return (
    <>
      <ComponentA />
      <hr />
      <ComponentB />
      <hr />
      <ComponentC />
      <hr />
      <AppButton title={'Click Me'} />
      <hr />
      <div className='flex gap-2 flex-wrap justify-center'>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
            (item, index) => {
              return <AppCard key={index} onClick={handleClick} />;
            }
          )}
      </div>


    </>
  );
};

export default ComponentsDriver;
