import React from "react";
import { Placeholder } from 'react-bootstrap'
import { Hcard, HcardTitle, HcardSub } from "../pages/inClassroom/feed/Styled";

export function HCardFeed(isLoading, classroom) {
  return (
    <div>
      <Hcard>
        {isLoading ? (
          <>
            <Placeholder as={HcardTitle} animation="glow">
              <Placeholder xs={6}/>
            </Placeholder>
            <Placeholder as={HcardSub} animation="glow">
              <Placeholder xs={4}/>
            </Placeholder>
            <Placeholder as={HcardSub} animation="glow">
              <Placeholder xs={2}/>
            </Placeholder>
          </>
        ) : (
          <>
            <HcardTitle>{classroom.nameOfClass}</HcardTitle>
            <HcardSub>{classroom.subject}</HcardSub>
            <HcardSub>{classroom.room}</HcardSub>
          </>
        )}
      </Hcard>
    </div>
  );
}
