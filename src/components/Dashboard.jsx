"use client";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { fetchPlayers } from "@src/store/players/players.actions";
import Card from "./Card";
import { redirect } from "next/navigation";
import TeamDialog from "./TeamDialog";
import Button from "./Button";
import TeamCard from "./TeamCard";

const Dashboard = () => {
  const { username, isUserLogged } = useSelector((state) => state.users);
  const { teams } = useSelector((state) => state.teams);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isUserLogged) {
      redirect("/login");
    }
  }, []);

  const onModalOpenHandler = () => {
    setIsOpen(true);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center pt-12 pb-20">
        <h1 className="text-4xl font-bold">Welcome! {username} </h1>
      </div>

      <div className="flex justify-between items-center pb-12">
        <h1 className="text-2xl font-bold"> Teams </h1>
        <Button onClick={onModalOpenHandler}>Create Team</Button>
      </div>

      <TeamDialog isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex flex-wrap">
        {teams.length ? (
          teams.map((team) => {
            return <TeamCard key={team.id} team={team} />;
          })
        ) : (
          <div className="pb-4">
            There is no team yet. Click "Create Team" to create one.
          </div>
        )}
      </div>

      {/* <div className="flex flex-wrap justify-center container mx-auto">
        {players.length &&
          players.map((player, index) => {
            if (players.length === index + 1) {
              return (
                <Card player={player} key={player.id} reference={observer} />
              );
            }
            return <Card key={player.id} player={player} />;
          })}
      </div>
      {loading && <div className="text-center">Loading...</div>} */}
    </div>
  );
};

export default Dashboard;
