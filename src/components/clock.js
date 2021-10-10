const Clock = (props) => {
  // 沒有使用 state 資料變動時，畫面不會變
  // 如果沒有 hook，只有 class 才能建立 state
  return (
    <div>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
};

export default Clock;
