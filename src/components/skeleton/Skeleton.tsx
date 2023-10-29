import React from "react";
import styled from "styled-components";

export const PortfolioItemSkeleton = () => {
  return (
    <ItemSkeleton>
      <div className="portfolio__image pulse"></div>
      <div className="portfolio__title pulse"></div>
    </ItemSkeleton>
  );
};

const ItemSkeleton = styled.div`
  width: 100%;

  .pulse {
        $from: #f5f5f5;
        $to: scale-color($from, $lightness: -10%);

        height: 100%;
        width: 100%;
        background: linear-gradient(-90deg, var(--skeleton1) 0%, var(--skeleton2) 50%, var(--skeleton1) 100%);
         /* background: linear-gradient(-90deg, #efefef 0%, #fcfcfc 50%, #efefef 100%); */

        background-size: 400% 400%;
        animation: pulse 1.2s ease-in-out infinite;

        @keyframes pulse {
            0% {
                background-position: 0% 0%
            }

            100% {
                background-position: -135% 0%
            }
        }
    }
  .portfolio__image {
    height: 200px;
    width: 100%;
  }
  .portfolio__title{
    height: 1rem;
    width: 100%;
    margin-top: 0.5rem;
  }
`;
