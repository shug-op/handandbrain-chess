import React from "react";
import { useParams } from "react-router-dom";
const socket = require("../connection/socket").socket;

/**
 * 'Join game' is where we actually join the game room.
 */

const JoinGameRoom = (gameid, userName, isCreator) => {
  /**
   * For this browser instance, we want
   * to join it to a gameRoom. For now
   * assume that the game room exists
   * on the backend.
   *
   *
   * TODO: handle the case when the game room doesn't exist.
   */
  const idData = {
    gameId: gameid,
    userName: userName,
    isCreator: isCreator,
  };
  socket.emit("playerJoinGame", idData);
};

const JoinGame = (props) => {
  /**
   * Extract the 'gameId' from the URL.
   * the 'gameId' is the gameRoom ID.
   */
  const { gameid } = useParams();
  JoinGameRoom(gameid, props.userName, props.isCreator);
  return (
    <div>
      {props.isInLobby && (
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>lobby</h1>
      )}
    </div>
  );
};

export default JoinGame;
