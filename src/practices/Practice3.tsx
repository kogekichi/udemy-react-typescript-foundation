export const Practice3 = () => {
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  const onClickPractice = () => {
    const total: number = getTotalFee(1000);
    console.log(total);
  };
  return (
    <div>
      <p>変数の型指定</p>
      <button onClick={onClickPractice}>練習問題３</button>
    </div>
  );
};
