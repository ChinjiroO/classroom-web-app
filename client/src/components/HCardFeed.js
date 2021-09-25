import React from "react";
import { Hcard, HcardTitle } from "../pages/inClassroom/feed/Styled";

export function HCardFeed(isLoading, classroom) {
  return <div>
    <Hcard>
      {isLoading ? (
        <HcardTitle>Loading ...</HcardTitle>
      ) : (
        <HcardTitle>{classroom.nameOfClass}</HcardTitle>
      )}
    </Hcard>
  </div>;
}
