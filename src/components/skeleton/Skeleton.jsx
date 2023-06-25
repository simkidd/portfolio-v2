import React from "react";
import styled from "styled-components";

export const PortfolioItemSkeleton = () => {
  return (
    <ItemSkeleton>
      <div className="portfolio__image">
      </div>
    </ItemSkeleton>
  );
};

const ItemSkeleton = styled.div`
  width: 100%;
  .portfolio__image {
    height: 200px;
    transition: background-color 0.3s ease-in-out;
    animation: skeleton-loading 1s linear infinite alternate;
  }
  @keyframes skeleton-loading {
    0% {
      background-color: #333;
    }
    50% {
      background-color: #555;
    }
    100% {
      background-color: #777;
    }
  }
`;
