import React from "react";

const NotFound = (props: { description: any; }) => {
  return (
    <section className="fdb-block">
      <p>
        className="lead"
        dangerouslySetInnerHTML={{
          __html: props.description
        }}
      </p>
    </section>
  );
};
export default NotFound;
