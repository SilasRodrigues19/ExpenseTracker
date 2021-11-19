import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  user-select: none;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    opacity: .6;
    background: url('https://media.aspera.com/hubfs/aspera/landingpages/de/tools/tools_ersparnisrechner-fuer-das-software-asset-management/aspera_tools_ersparnisrechner-fuer-das-software-asset-management_lp-header_1920x1080px.jpg') no-repeat center/cover;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

export const Header = styled.div`
  background-color: #4d4d4d;
  height: 150px;
  text-align: center;
`;

export const HeaderText = styled.h1`
  margin: 0;
  padding: 0;
  color: #fff;
  padding-top: 30px;
`;

export const Body = styled.div`
  margin: auto;
  max-width: 1200px;
  margin-bottom: 50px;
`;