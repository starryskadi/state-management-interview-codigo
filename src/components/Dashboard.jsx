"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "next/navigation";
import TeamDialog from "./TeamDialog";
import Button from "./Button";
import TeamCard from "./TeamCard";
import { logoutUser } from "@src/store/users/users.action";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { username, isUserLogged } = useSelector((state) => state.users);
  const { teams } = useSelector((state) => state.teams);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isUserLogged) {
      redirect("/login");
    }
  }, [isUserLogged]);

  const onModalOpenHandler = () => {
    setIsOpen(true);
  };

  const onLogoutHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center pt-12 pb-20">
        <h1 className="text-4xl font-bold">Welcome! {username} </h1>
        <Button onClick={onLogoutHandler}>Logout</Button>
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
    </div>
  );
};

export default Dashboard;
