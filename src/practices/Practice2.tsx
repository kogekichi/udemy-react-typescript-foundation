export const Practice2 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  const onClickPractice = () => {
    const total = getTotalFee(1000);
    console.log(total);
  };
  return (
    <div>
      <p>返却値の型指定</p>
      <button onClick={onClickPractice}>練習問題２</button>
    </div>
  );
};