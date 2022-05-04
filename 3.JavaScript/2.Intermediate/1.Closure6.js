const credits = ((num) => {
  let credits = num;
  console.log(`Initial Value: ${credits}`);
  return () => {
    credits -= 1;
    if (credits > 0) console.log(`Playing game, ${credits} credit(s) remaining`);
    if (credits <= 0) console.log(`Game Over, ${credits} credit(s) remaining`);
  };
})(10);

credits();
credits();
credits();
credits();
credits();
credits();
credits();
credits();
credits();
credits();
credits();
credits();
