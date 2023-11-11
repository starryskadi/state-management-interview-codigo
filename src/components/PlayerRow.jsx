import {
  addPlayerToTeam,
  removePlayerFromTeam,
} from "@src/store/teams/teams.actions";
import React from "react";
import { FaTrash, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";

const PlayerRow = ({ team, player, isExisting, innerRef }) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    if (isExisting) {
      return dispatch(removePlayerFromTeam(player.id, team.id));
    }

    return dispatch(addPlayerToTeam(player, team.id));
  };

  return (
    <div
      className="rounded overflow-hidden shadow-lg w-full my-4"
      ref={innerRef}
    >
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="font-bold text-xl ">
            {player.first_name} {player.last_name}
          </div>
          <p className="text-gray-700 text-base ml-4">{player.position}</p>
        </div>
        <button onClick={onClickHandler}>
          {isExisting ? <FaTrash /> : <FaPlus />}
        </button>
      </div>
    </div>
  );
};

export default PlayerRow;
