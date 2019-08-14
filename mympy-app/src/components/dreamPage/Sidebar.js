import React from 'react';
import styled from 'styled-components';

// import RecentDonations from './RecentDonations.js';
import ProjectInfo from './ProjectInfo.js';

const SidebarDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 294px;
	background-color: #03497B;
	border-radius: 10px;
	margin-left: 2%;
	margin-top: -196px;
	position: relative;
`

const Sidebar = ({ dream, user }) => {
	return (
		<SidebarDiv>
			<ProjectInfo dream={dream} user={user} />
			{/* <RecentDonations donations={dream.recentDonations} /> */}
		</SidebarDiv>
	);
}

export default Sidebar;