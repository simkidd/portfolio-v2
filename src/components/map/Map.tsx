import React from "react";
import styled from "styled-components";

const Map = () => {
  return (
    <MapWrapper>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4782.948140129947!2d6.9803715689408135!3d4.809887437634062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1687623873343!5m2!1sen!2sng"
        width="100%"
        height="250"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </MapWrapper>
  );
};

export default Map;

const MapWrapper = styled.div`
  margin-top: 2rem;

  iframe {
    border: 1px solid var(--borderColor);
  }
`;
