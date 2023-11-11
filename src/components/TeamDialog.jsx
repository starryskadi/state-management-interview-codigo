import { Dialog } from "@headlessui/react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { createTeam, updateTeam } from "@src/store/teams/teams.actions";
import { useEffect, useState } from "react";

const initalState = { name: "", playerCount: 0, region: "", country: "" };

const TeamDialog = ({ isOpen, setIsOpen, isEdit, team }) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.teams.error);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isError, setIsError] = useState(true);
  const [state, setState] = useState({
    ...initalState,
    ...team,
  });

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

  const onTeamCreateHandler = (ev) => {
    ev.preventDefault();

    const { name, playerCount, region, country } = state;

    if (isEdit) {
      dispatch(updateTeam({ id: team.id, name, playerCount, region, country }));
    } else {
      dispatch(createTeam({ name, playerCount, region, country }));
    }

    setIsSubmit(true);
  };

  const onChangeHandler = (ev) => {
    const { name, value } = ev.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed inset-0 z-10 w-screen overflow-y-auto flex items-center justify-center bg-black  bg-opacity-50"
    >
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <Dialog.Panel>
          <form onSubmit={onTeamCreateHandler}>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <Dialog.Title className="text-2xl font-semibold leading-6 text-gray-900 mb-8">
                Create Team
              </Dialog.Title>

              <div className="mb-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    value={state.name}
                    type="name"
                    autoComplete="name"
                    required
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    onChange={onChangeHandler}
                  />
                </div>
              </div>

              {/* TODO: Disable the player count and use the players with team counts directly  */}
              <div className="mb-2">
                <label
                  htmlFor="playerCount"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Player Count
                </label>
                <div className="mt-2">
                  <input
                    id="playerCount"
                    name="playerCount"
                    value={state.playerCount}
                    type="number"
                    autoComplete="playerCount"
                    required
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    onChange={onChangeHandler}
                  />
                </div>
              </div>

              <div className="mb-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Region
                </label>
                <div className="mt-2">
                  <input
                    id="region"
                    name="region"
                    value={state.region}
                    type="text"
                    autoComplete="region"
                    required
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    onChange={onChangeHandler}
                  />
                </div>
              </div>

              <div className="mb-2">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Country
                </label>
                <div className="mt-2">
                  <input
                    id="country"
                    name="country"
                    value={state.country}
                    type="text"
                    autoComplete="country"
                    required
                    className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    onChange={onChangeHandler}
                  />
                </div>
              </div>

              <div>
                {isError && error ? (
                  <div className="text-red-500">{error.message}</div>
                ) : null}
              </div>
            </div>

            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <Button type="submit">Save</Button>
              <Button
                onClick={() => setIsOpen(false)}
                type="button"
                className="bg-gray-900 mr-2 sm:mr-2 ml-2 sm:ml-0 hover:bg-gray-900"
              >
                Cancel
              </Button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default TeamDialog;
