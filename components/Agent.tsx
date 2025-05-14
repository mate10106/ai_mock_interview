import Image from "next/image";

enum CallStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}

const Agent = ({ userName, userId, type }: AgentProps) => {
  const isSpeaking = true;

  return (
    <>
      <div className="call-view">
        <div className="card-interviewer">
          <div className="avatar">
            <Image
              src="/ai-avatar.png"
              alt="vapi"
              width={65}
              height={54}
              className="object-cover"
            />
            {isSpeaking && <span className="animate-speak" />}
          </div>
          <h3>AI Interviewer</h3>
        </div>
        <div className="card-border">
          <div className="card-content">
            <Image
              src="/user-avatar.png"
              alt="user avatar"
              width={540}
              height={540}
              className="rounded-full object-cover size-[120px]"
            />
            <h3>{userName}</h3>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        {CallStatus !== CallStatus.ACTIVE ? (
            <button className="relative btn-call" onClick={() => handleCall()}>
            <span
              className={cn(
                "absolute animate-ping rounded-full opacity-75",
                CallStatus !== "CONNECTING" && "hidden"
              )}
            />

            <span className="relative">
              {CallStatus === "INACTIVE" || CallStatus === CallStatus.FINISHED
                ? "Call"
                : ". . ."}
            </span>
          </button>
        )}
      </div>
    </>
  );
};

export default Agent;
