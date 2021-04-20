import React, { FunctionComponent } from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';

interface PopoverContainerProps {
  itemComponent: Function;
  children: any;
  isHover?: boolean;
  placement?: string;
}
const PopoverContainer: FunctionComponent<PopoverContainerProps> = (props) => {
  const { children, itemComponent, isHover, placement } = props;
  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>{itemComponent()}</Popover.Content>
    </Popover>
  );

  if (placement) {
    return (
      <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popover}>
        {children}
      </OverlayTrigger>
    );
  }

  if (isHover) {
    return (
      <OverlayTrigger trigger={['hover', 'focus']} rootClose placement="auto" overlay={popover}>
        {children}
      </OverlayTrigger>
    );
  }
  return (
    <OverlayTrigger trigger="click" rootClose placement="auto" overlay={popover}>
      {children}
    </OverlayTrigger>
  );
};

export default PopoverContainer;
