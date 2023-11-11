"use client";

import { FaUsers, FaGlobe, FaFlag } from "react-icons/fa";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { removeTeam } from "@src/store/teams/teams.actions";
import TeamDialog from "./TeamDialog";
import { useState } from "react";
import PlayersDialog from "./PlayersDialog";

const TeamCard = ({ team }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isPlayersOpen, setIsPlayersOpen] = useState(false);

  const onRemoveHandler = () => {
    dispatch(removeTeam(team.id));
  };

  return (
    <>
      <div className="w-1/2 md:w-1/4  px-2">
        <div className="rounded overflow-hidden shadow-lg my-4">
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-8">{team.name}</div>
            <div className="text-gray-700 text-base mb-4 mt-2 font-bold flex items-center">
              <FaUsers className="inline-block mr-2" />
              <span className="mr-3">{team.playerCount} Players </span>
              <Button onClick={() => setIsPlayersOpen(true)}> Edit </Button>
            </div>

            <div className="flex flex-wrap">
              <div className="mr-4 flex items-center">
                <FaGlobe className="inline-block mr-2" />
                {team.region}
              </div>
              <div className="flex items-center">
                <FaFlag className="inline-block mr-2" />
                {team.country}
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3">
            <Button onClick={() => setIsOpen(true)} className="mr-2">
              Edit
            </Button>
            <Button
              className="bg-red-500 hover:bg-red-600"
              onClick={onRemoveHandler}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
      {isOpen ? (
        <TeamDialog
          isEdit
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          team={team}
        ></TeamDialog>
      ) : null}
      {isPlayersOpen ? (
        <PlayersDialog
          team={team}
          isOpen={isPlayersOpen}
          setIsOpen={setIsPlayersOpen}
        ></PlayersDialog>
      ) : null}
    </>
  );
};

export default TeamCard;
