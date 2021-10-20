import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const Clock = (props) => {
  // 沒有使用 state 資料變動時，畫面不會變
  // 如果沒有 hook，只有 class 才能建立 state

  Clock.propTypes = {
    date: PropTypes.instanceOf(Date),
  }

  const [clockChangedCount, setClockChangedCount] = useState(0);

  // useEffect array 裡面放參數稱作 componentDidUpdate 類似 vue 的 watch 功能
  useEffect(() => {
    setClockChangedCount((clockChangedCount) => clockChangedCount + 1);
  }, [props.date]);

  return (
    <div>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
      <h2>{ clockChangedCount < 10 && clockChangedCount}</h2>
      <h2>{ clockChangedCount >= 10 && clockChangedCount}</h2>
      <h2>{ clockChangedCount < 10 ? `${clockChangedCount}*` : clockChangedCount}</h2>
    </div>
  );
};

export default Clock;
