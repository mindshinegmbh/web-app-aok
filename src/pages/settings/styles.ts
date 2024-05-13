import styled from 'styled-components';

const SettingListParent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em 0.25em 1em;
`;

const CloseParent = styled.div`
  display: flex;
  flex: 1;
  margin-top: 24px;
  margin-right: 24px;
  justify-content: left;
  align-items: left;
  align-self: flex-end;
`;

const BarrierFreiheitParent = styled.div`
  display: flex;
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 24px;
  flex-direction: column;
`;

const BarrierFreiheitHeading = styled.div`
  margin-bottom: 16px;
`;

export { SettingListParent, CloseParent, BarrierFreiheitParent, BarrierFreiheitHeading };
