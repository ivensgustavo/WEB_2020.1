import React from 'react';

export default (props) => {
  return (
    <div className = 'arena'>
      <div className="jumbotron">
        <h1 className="display-4">Questão 04</h1>
        <hr className="my-4"/>

        <div className="d-flex flex-row ">
          {React.Children.map(
          props.children,
          (filho) => {
            return React.cloneElement(filho, {...props})
          })}
        </div>

      </div>
    </div>
  );
}