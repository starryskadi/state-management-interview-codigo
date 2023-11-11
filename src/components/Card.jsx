"use client";

const Card = ({ player, reference }) => (
  <div
    className="rounded overflow-hidden shadow-lg w-full my-4"
    ref={reference}
  >
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">
        {player.first_name} {player.last_name}
      </div>
      <p className="text-gray-700 text-base">{player.position}</p>
    </div>
  </div>
);

export default Card;
