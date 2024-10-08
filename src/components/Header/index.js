import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { Title } from '../Title';
import ModalMemory from '../ModalMemory';
import Profile from '../Profile';

const HeaderContainer = styled.header`
  height: 12%;
  background-color: var(--secondary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 120px 120px;
  padding: 0 60px;
`;

function Header() {
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  return (
    <HeaderContainer>
      <FontAwesomeIcon color="var(--text-color)" icon={faBoxOpen} size="2x" />
      <Title>Memory Box</Title>
      <FontAwesomeIcon
        color="var(--text-color)"
        icon={faUser}
        size="2x"
        onClick={handleProfileClick}
        style={{ cursor: 'pointer' }}
      />
      {showProfile && (
        <ModalMemory onClose={handleCloseProfile}>
          <Profile />
        </ModalMemory>
      )}
    </HeaderContainer>
  );
}

export default Header;
