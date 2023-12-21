import { useCallback, useEffect, useState } from "react";
import { useSocket } from "../context/SocketProvider";
import ReactPlayer from "react-player";

export default function Room() {
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState(null);
  const handleUserJoined = useCallback(({ email, id }) => {
    console.log(`Email ${email} joined with id ${id}`);
    setRemoteSocketId(id);
  }, []);

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    return () => {
      socket.off("user:joined", handleUserJoined);
    };
  }, [socket, handleUserJoined]);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
    });
    setMyStream(stream);
}, []);
  return (
    <div>
      <h1>Room page</h1>
      <h4>{remoteSocketId ? "Connected" : "No one in room"}</h4>
      {remoteSocketId && <button onClick={handleCallUser}>Call</button>}
      {myStream && <ReactPlayer url={myStream} playing /> }
    </div>
  );
}
