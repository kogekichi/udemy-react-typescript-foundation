export const Practice4 = () => {
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractice = () => calcTotalFee(1000);
  return (
    <div>
      <p>設定ファイル</p>
      <button onClick={onClickPractice}>練習問題４</button>
    </div>
  );
};
