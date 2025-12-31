import styled from 'styled-components';

// NOTE: You can change the little gradient on the sidebar buttons
// by modifying the background: linear-gradient(to right, rgba(250, 78, 73, 0.2), transparent);
// You can also modify the button height (i.e. if you want them more compact or spread out) by touching up min-height and padding.
const MainSidebar = styled.nav`
    width: 300px;
    flex-direction: column;
    shrink: 0;
    border-radius: 8px;
    overflow-x: hidden;
    padding: 32px;
    // position: absolute;
    margin-right: 8px;
    user-select: none;
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.08);

    & > .pyro-subnav-routes-wrapper {
        display: flex;
        flex-direction: column;
        font-size: 14px;

        & > a,
        & > div {
            display: flex;
            position: relative;
            padding: 8px 0;
            gap: 8px;
            font-weight: 600;
            min-height: 44px;
            -webkit-tap-highlight-color: transparent;
            user-select: none;
            user-drag: none;
            -ms-user-drag: none;
            -moz-user-drag: none;
            -webkit-user-drag: none;
            transition: 200ms all ease-in-out;

            &.active {
                color: #fa4e49;
                fill: #fa4e49;
                background: linear-gradient(to left, rgba(250, 78, 73, 0.35), transparent);
            }
        }
    }
`;

export default MainSidebar;
