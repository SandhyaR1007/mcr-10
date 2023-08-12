const Card = ({ cardText, cardValue, textColor, link, isDashboard }) => {
  return (
    <div className="p-5 bg-gray-200 shadow-md rounded-md flex flex-col items-center justify-center">
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
