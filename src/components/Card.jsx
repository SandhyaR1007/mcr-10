const Card = ({
  cardText,
  cardValue,
  textColor,
  clickHandler,
  isDashboard,
}) => {
  return (
    <div
      className={`p-5 bg-gray-200 shadow-md rounded-md flex flex-col items-center justify-center ${
        clickHandler ? "cursor-pointer" : ""
      }`}
      onClick={() => {
        if (clickHandler) {
          clickHandler();
        }
      }}
    >
      {isDashboard && (
        <>
          <p className={`${textColor} font-bold text-2xl`}>{cardValue}</p>
        </>
      )}
      <h3 className="font-semibold text-lg text-gray-700">{cardText}</h3>
    </div>
  );
};

export default Card;
