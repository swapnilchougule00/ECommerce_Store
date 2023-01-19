import React from "react";

function Loading() {
  return (
    <div className="h-screen grid place-content-center">
        <div className="border rounded-full animate-ping py-[88px] p-8">
          <h1 className="animate-pulse text-bold text-3xl">LOADING...</h1>
      </div>
    </div>
  );
}

export default Loading;
