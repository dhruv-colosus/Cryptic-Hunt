export default function LeaderBoardPage() {
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
        <tbody className="text-center text-sm lg:text-base font-minecraftia text-main grid ">
          {/* <tr className="grid grid-cols-3 py-2 ">
            <td className="translate-y-1">1.</td>
            <td className="translate-y-1">Aryan</td>
            <td className="translate-y-1">100</td>
          </tr>
          <tr className="bg-main/10 grid grid-cols-3 py-2 ">
            <td className="translate-y-1">2.</td>
            <td className="translate-y-1">Aryan</td>
            <td className="translate-y-1">100</td>
          </tr> */}
          {items.map((item, index) => (
            <TableRow
              key={index}
              rank={index + 1}
              username={item.username}
              score={item.score}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
}

const TableRow = ({ rank, username, score }) => {
  return (
    <tr
      className={`grid grid-cols-3 py-2 ${rank % 2 === 0 ? "bg-main/10" : ""}`}
    >
      <td className="translate-y-1">{rank}.</td>
      <td className="translate-y-1">{username}</td>
      <td className="translate-y-1">{score}</td>
    </tr>
  );
};

const items = [
  { username: "Aryan", score: 100 },
  { username: "Aryan", score: 100 },
  { username: "Aryan", score: 100 },
  { username: "Aryan", score: 100 },
  { username: "Aryan", score: 100 },
  { username: "Aryan", score: 100 },
  { username: "Aryan", score: 100 },
  { username: "Aryan", score: 100 },
  { username: "Aryan", score: 100 },
  { username: "Aryan", score: 100 },
];
