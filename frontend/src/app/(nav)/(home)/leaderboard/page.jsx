"use client";

import { useLeaderboardQuery } from "@/hooks/queries/leaderboard-query";
import { useState } from "react";

export default function LeaderBoardPage() {
  const leaderboardQuery = useLeaderboardQuery();
  const [page, setPage] = useState(1);

  let pages = Math.ceil(leaderboardQuery.data?.length / 30);

  let sliceFrom = (page - 1) * 30;
  let sliceTo = page * 30;

  return (
    <main className="pt-12">
      <h1 className="font-heading text-3xl  text-main text-center lg:text-5xl">
        LEADERBOARD
      </h1>
      <table className="w-full ">
        <thead className="lg:text-2xl text-xl font-heading grid">
          <tr className="grid grid-cols-3 py-6 mt-4">
            <th>RANK</th>
            <th>USERNAME</th>
            <th>SCORE</th>
          </tr>
        </thead>
        {leaderboardQuery.isLoading ? (
          <tbody className="text-center text-sm lg:text-base font-minecraftia text-main grid animate-pulse">
            {items.map((item, index) => (
              <TableRow
                key={index}
                rank={item.rank}
                username={item.username}
                score={item.score}
                idx={index + 1}
              />
            ))}
          </tbody>
        ) : (
          <tbody className="text-center text-sm lg:text-base font-minecraftia text-main grid">
            {leaderboardQuery.data
              ?.slice(sliceFrom, sliceTo)
              .map((item, index) => (
                <TableRow
                  key={index}
                  rank={index + 1 + sliceFrom}
                  username={item.name}
                  score={item.score}
                  idx={index + 1 + sliceFrom}
                />
              ))}
          </tbody>
        )}
      </table>

      <div className="flex justify-center items-center mt-10 gap-2">
        <button
          className="font-minecraftia w-7 h-7 bg-main grid place-content-center rounded-full disabled:opacity-50"
          onClick={() => setPage((prev) => prev - 1)}
          disabled={page === 1}
        >
          <span className="translate-y-[0.375rem]">{"<"}</span>
        </button>
        <p className="text-white font-sub">
          Page {page} of {pages}
        </p>
        <button
          className="font-minecraftia w-7 h-7 bg-main grid place-content-center rounded-full disabled:opacity-50"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === pages}
        >
          <span className="translate-y-[0.375rem] translate-x-[0.125rem]">
            {">"}
          </span>
        </button>
      </div>
    </main>
  );
}

const TableRow = ({ rank, username, score, idx }) => {
  return (
    <tr
      className={`grid grid-cols-3 py-2 ${rank % 2 === 0 ? "bg-main/10" : ""}`}
    >
      <td className="translate-y-1">{rank}</td>
      <td className="translate-y-1">{username}</td>
      <td className="translate-y-1">{score}</td>
    </tr>
  );
};

const items = [
  { rank: "---", username: "---", score: "---" },
  { rank: "---", username: "---", score: "---" },
  { rank: "---", username: "---", score: "---" },
  { rank: "---", username: "---", score: "---" },
  { rank: "---", username: "---", score: "---" },
  { rank: "---", username: "---", score: "---" },
  { rank: "---", username: "---", score: "---" },
];
