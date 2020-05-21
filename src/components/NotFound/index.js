import React from "react";

const NotFound = props => {
  return (
    <section className="fdb-block">
      <p
        className="lead"
        dangerouslySetInnerHTML={{
          __html: props.description
        }}
      />
    </section>
  );
};
export default NotFound;
