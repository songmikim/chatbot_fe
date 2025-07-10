import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { VscRobot } from 'react-icons/vsc';
import { FaRegCircleUser } from 'react-icons/fa6';
import color from '../../global/styles/color';
import fontsize from '../../global/styles/fontsize';
import loadingImg from '../../global/images/loading.gif';

const { light, dark } = color;
const { medium } = fontsize;

const Wrapper = styled.ul`
  flex-grow: 1;
  background: ${light};
  font-size: ${medium};
  color: ${dark};
  border: 3px solid ${dark};
  overflow-y: auto;

  li {
    padding: 10px 20px;

    svg {
      margin-right: 10px;
    }

    span {
      word-break: break-all;
    }
  }

  .user {
    text-align: right;
  }

  .system {
    text-align: left;
  }

  .loading {
    height: 200px;
    display: block;
    margin: 0 auto;
  }
`;

const ChatLog = ({ items, loading }) => {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    setTimeout(() => {
      el.scrollTo(0, 47 * items.length);
    }, 500);
  }, [ref, items]);

  return (
    <Wrapper ref={ref}>
      {items.map((item, i) => (
        <ChatItem key={item.type + '-' + i} item={item} />
      ))}
      {loading && <img src={loadingImg} className="loading"/>}
    </Wrapper>
  );
};

const ChatItem = ({ item }) => {
  const { type, message } = item;
  return (
    <>
      <li className={type}>
        {type === 'system' ? <VscRobot /> : <FaRegCircleUser />}
        <span>{message}</span>
      </li>
    </>
  );
};
export default React.memo(ChatLog);
