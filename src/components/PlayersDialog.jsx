import { useRef } from "react";
import { Dialog } from "@headlessui/react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlayers } from "@src/store/players/players.actions";
import { useEffect, useState } from "react";
import PlayerRow from "./PlayerRow";

const PlayersDialog = ({ isOpen, setIsOpen, team }) => {
  const dispatch = useDispatch();
  const observer = useRef();
  const error = useSelector((state) => state.teams.error);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isError, setIsError] = useState(true);
  const { players, currentPage, loading, first } = useSelector(
    (state) => state.players
  );
  const scrollContainer = useRef();

  useEffect(() => {
    scrollContainer.current.addEventListener("scroll", () => {
      const scrollHeight = scrollContainer.current.scrollHeight;
      const scrollTop = scrollContainer.current.scrollTop;
      const clientHeight = scrollContainer.current.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight) {
        dispatch(fetchPlayers(currentPage + 1));
      }
    });
  }, [scrollContainer.current]);

  useEffect(() => {
    // Error Handling for Team Creation
    if (isSubmit && !error) {
      setIsOpen(false);
    }

    if (error) {
      setIsError(true);
    }

    return () => {
      setIsSubmit(false);
    };
  }, [isSubmit]);

  useEffect(() => {
    if (!first) {
      dispatch(fetchPlayers(currentPage));
    }
  }, []);

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed inset-0 z-10 w-screen overflow-y-auto flex items-center justify-center bg-black  bg-opacity-50"
    >
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
        <Dialog.Panel>
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <Dialog.Title className="text-2xl font-semibold leading-6 text-gray-900 mb-8">
              Select Players
            </Dialog.Title>

            {team?.players?.length ? (
              <>
                <h3> Current Players </h3>
                <div>
                  {team.players.map((player, index) => {
                    return (
                      <PlayerRow
                        key={player.id + index}
                        isExisting
                        player={player}
                        team={team}
                      ></PlayerRow>
                    );
                  })}
                </div>
              </>
            ) : null}

            <h3 className="mt-9 mb-4"> Add New Players </h3>
            <div className="max-h-[50vh] overflow-scroll" ref={scrollContainer}>
              {players.length
                ? players.map((player, index) => {
                    if (index + 1 === players.length) {
                      return (
                        <PlayerRow
                          player={player}
                          team={team}
                          key={player.id + index}
                          innerRef={observer}
                        ></PlayerRow>
                      );
                    }

                    return (
                      <PlayerRow
                        player={player}
                        team={team}
                        key={player.id + index}
                      ></PlayerRow>
                    );
                  })
                : null}
            </div>

            <div>
              {isError && error ? (
                <div className="text-red-500">{error.message}</div>
              ) : null}
            </div>
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <Button
              onClick={() => setIsOpen(false)}
              type="button"
              className="bg-gray-900 mr-2 sm:mr-2 ml-2 sm:ml-0 hover:bg-gray-900"
            >
              Close
            </Button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default PlayersDialog;
